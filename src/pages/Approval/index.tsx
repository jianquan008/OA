import { useState } from 'react';
import { Card, Typography, Tabs, Table, Tag, Button, Space, Modal, Descriptions, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { mockApprovalList } from '../../mocks/approval';
import type { ApprovalItem } from '../../types';

const { Title } = Typography;

function Approval() {
  const [approvals, setApprovals] = useState<ApprovalItem[]>(mockApprovalList);
  const [detailVisible, setDetailVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState<ApprovalItem | null>(null);

  const typeConfig: Record<ApprovalItem['type'], { color: string; text: string }> = {
    leave: { color: 'blue', text: '请假' },
    expense: { color: 'green', text: '报销' },
    purchase: { color: 'orange', text: '采购' },
  };

  const statusConfig: Record<ApprovalItem['status'], { color: string; text: string }> = {
    pending: { color: 'processing', text: '待审批' },
    approved: { color: 'success', text: '已通过' },
    rejected: { color: 'error', text: '已拒绝' },
  };

  const handleApprove = (id: string, action: 'approved' | 'rejected') => {
    setApprovals(approvals.map(item => 
      item.id === id ? { ...item, status: action } : item
    ));
    message.success(action === 'approved' ? '审批已通过' : '审批已拒绝');
    setDetailVisible(false);
  };

  const showDetail = (record: ApprovalItem) => {
    setCurrentItem(record);
    setDetailVisible(true);
  };

  const columns: ColumnsType<ApprovalItem> = [
    { title: '标题', dataIndex: 'title', key: 'title' },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: ApprovalItem['type']) => <Tag color={typeConfig[type].color}>{typeConfig[type].text}</Tag>,
    },
    { title: '申请人', dataIndex: 'applicant', key: 'applicant' },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: ApprovalItem['status']) => <Tag color={statusConfig[status].color}>{statusConfig[status].text}</Tag>,
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount?: number) => amount ? `¥${amount.toLocaleString()}` : '-',
    },
    { title: '申请时间', dataIndex: 'createTime', key: 'createTime' },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type="link" size="small" onClick={() => showDetail(record)}>查看详情</Button>
          {record.status === 'pending' && (
            <>
              <Button type="link" size="small" onClick={() => handleApprove(record.id, 'approved')}>通过</Button>
              <Button type="link" size="small" danger onClick={() => handleApprove(record.id, 'rejected')}>拒绝</Button>
            </>
          )}
        </Space>
      ),
    },
  ];

  const pendingList = approvals.filter(item => item.status === 'pending');
  const approvedList = approvals.filter(item => item.status !== 'pending');
  const myList = approvals.filter(item => item.applicant === '当前用户');

  const tabItems = [
    { key: 'pending', label: `待我审批 (${pendingList.length})`, children: <Table columns={columns} dataSource={pendingList} rowKey="id" pagination={false} /> },
    { key: 'initiated', label: `我发起的 (${myList.length})`, children: <Table columns={columns} dataSource={myList} rowKey="id" pagination={false} locale={{ emptyText: '暂无发起的审批' }} /> },
    { key: 'processed', label: `已审批 (${approvedList.length})`, children: <Table columns={columns} dataSource={approvedList} rowKey="id" pagination={false} /> },
  ];

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>审批流程</Title>

      <Card>
        <Tabs items={tabItems} />
      </Card>

      <Modal
        title="审批详情"
        open={detailVisible}
        onCancel={() => setDetailVisible(false)}
        footer={currentItem?.status === 'pending' ? [
          <Button key="reject" danger onClick={() => handleApprove(currentItem.id, 'rejected')}>拒绝</Button>,
          <Button key="approve" type="primary" onClick={() => handleApprove(currentItem.id, 'approved')}>通过</Button>,
        ] : [<Button key="close" onClick={() => setDetailVisible(false)}>关闭</Button>]}
      >
        {currentItem && (
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="标题">{currentItem.title}</Descriptions.Item>
            <Descriptions.Item label="类型"><Tag color={typeConfig[currentItem.type].color}>{typeConfig[currentItem.type].text}</Tag></Descriptions.Item>
            <Descriptions.Item label="申请人">{currentItem.applicant}</Descriptions.Item>
            <Descriptions.Item label="状态"><Tag color={statusConfig[currentItem.status].color}>{statusConfig[currentItem.status].text}</Tag></Descriptions.Item>
            {currentItem.amount && <Descriptions.Item label="金额">¥{currentItem.amount.toLocaleString()}</Descriptions.Item>}
            <Descriptions.Item label="申请时间">{currentItem.createTime}</Descriptions.Item>
            <Descriptions.Item label="申请内容">{currentItem.content}</Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
}

export default Approval;

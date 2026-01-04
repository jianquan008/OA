import { useState } from 'react';
import { Card, Row, Col, Typography, List, Tag, Carousel, Space, Button } from 'antd';
import {
  CheckCircleOutlined,
  AuditOutlined,
  CalendarOutlined,
  NotificationOutlined,
  RightOutlined,
  CarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { mockDashboardStats, mockTodoList, mockNotices } from '../../mocks/dashboard';
import type { DashboardStats, TodoItem, Notice } from '../../types';

const { Title, Text, Paragraph } = Typography;

function Dashboard() {
  const navigate = useNavigate();
  const [stats] = useState<DashboardStats>(mockDashboardStats);
  const [todoList] = useState<TodoItem[]>(mockTodoList);
  const [notices] = useState<Notice[]>(mockNotices);

  const quickActions = [
    { title: '日程管理', icon: <CalendarOutlined />, path: '/schedule', color: '#1890ff' },
    { title: '审批流程', icon: <AuditOutlined />, path: '/approval', color: '#52c41a' },
    { title: '通讯录', icon: <TeamOutlined />, path: '/contacts', color: '#722ed1' },
    { title: '车辆管理', icon: <CarOutlined />, path: '/vehicle', color: '#fa8c16' },
  ];

  const typeConfig: Record<TodoItem['type'], { color: string; text: string }> = {
    meeting: { color: 'blue', text: '会议' },
    task: { color: 'green', text: '任务' },
    approval: { color: 'orange', text: '审批' },
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>首页仪表盘</Title>
      
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card hoverable style={{ textAlign: 'center' }}>
            <CheckCircleOutlined style={{ fontSize: 32, color: '#1890ff', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 'bold', color: '#1890ff' }}>{stats.todoCount}</div>
            <div style={{ color: '#666' }}>待办事项</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable style={{ textAlign: 'center' }}>
            <AuditOutlined style={{ fontSize: 32, color: '#fa8c16', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 'bold', color: '#fa8c16' }}>{stats.approvalCount}</div>
            <div style={{ color: '#666' }}>待审批</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable style={{ textAlign: 'center' }}>
            <CalendarOutlined style={{ fontSize: 32, color: '#52c41a', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 'bold', color: '#52c41a' }}>{stats.meetingCount}</div>
            <div style={{ color: '#666' }}>今日会议</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable style={{ textAlign: 'center' }}>
            <NotificationOutlined style={{ fontSize: 32, color: '#eb2f96', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 'bold', color: '#eb2f96' }}>{stats.noticeCount}</div>
            <div style={{ color: '#666' }}>新通知</div>
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="待办事项" extra={<Button type="link" onClick={() => navigate('/schedule')}>查看全部 <RightOutlined /></Button>}>
            <List
              dataSource={todoList}
              renderItem={(item) => (
                <List.Item>
                  <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Space>
                      <Tag color={typeConfig[item.type].color}>{typeConfig[item.type].text}</Tag>
                      <Text>{item.title}</Text>
                      {item.urgent && <Tag color="red">紧急</Tag>}
                    </Space>
                    <Text type="secondary">{item.time}</Text>
                  </Space>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col span={12}>
          <Card title="快捷入口" style={{ marginBottom: 16 }}>
            <Row gutter={[16, 16]}>
              {quickActions.map((action) => (
                <Col span={12} key={action.path}>
                  <Card hoverable size="small" onClick={() => navigate(action.path)} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 24, color: action.color, marginBottom: 8 }}>{action.icon}</div>
                    <Text>{action.title}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          <Card title="公告通知">
            <Carousel autoplay>
              {notices.map((notice) => (
                <div key={notice.id}>
                  <div style={{ padding: '8px 0' }}>
                    <Title level={5}>{notice.title}</Title>
                    <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 8 }}>{notice.content}</Paragraph>
                    <Text type="secondary">{notice.publishTime}</Text>
                  </div>
                </div>
              ))}
            </Carousel>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;

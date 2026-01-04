import { useState } from 'react';
import { Card, Row, Col, Typography, Tree, List, Avatar, Input, Tag, Space, Button, Drawer, Descriptions, message } from 'antd';
import { PhoneOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import type { DataNode } from 'antd/es/tree';
import { mockDepartments, mockEmployees } from '../../mocks/contacts';
import type { User } from '../../types';

const { Title } = Typography;
const { Search } = Input;

function Contacts() {
  const [employees] = useState<User[]>(mockEmployees);
  const [selectedDept, setSelectedDept] = useState<string>('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState<User | null>(null);

  // 转换组织架构为 Tree 数据
  const convertToTreeData = (): DataNode[] => {
    return mockDepartments.map(dept => ({
      key: dept.id,
      title: dept.name,
      children: dept.children?.map(child => ({
        key: child.id,
        title: `${child.name} (${child.employees?.length || 0}人)`,
      })),
    }));
  };

  const treeData = convertToTreeData();

  // 筛选员工
  const filteredEmployees = employees.filter(emp => {
    const matchDept = !selectedDept || emp.department === selectedDept;
    const matchSearch = !searchKeyword || 
      emp.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchDept && matchSearch;
  });

  const handleSelectDept = (selectedKeys: React.Key[]) => {
    if (selectedKeys.length > 0) {
      const deptId = selectedKeys[0] as string;
      const dept = mockDepartments[0].children?.find(d => d.id === deptId);
      setSelectedDept(dept?.name || '');
    } else {
      setSelectedDept('');
    }
  };

  const showEmployeeDetail = (employee: User) => {
    setCurrentEmployee(employee);
    setDrawerVisible(true);
  };

  const handleCall = (phone: string) => {
    message.info(`正在拨打: ${phone}`);
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>通讯录</Title>

      <Row gutter={16}>
        <Col span={6}>
          <Card title="组织架构" size="small">
            <Tree
              treeData={treeData}
              defaultExpandAll
              onSelect={handleSelectDept}
            />
          </Card>
        </Col>

        <Col span={18}>
          <Card
            title={selectedDept ? `${selectedDept} - 员工列表` : '全部员工'}
            extra={
              <Search
                placeholder="搜索员工姓名或职位"
                allowClear
                style={{ width: 250 }}
                onSearch={setSearchKeyword}
                onChange={(e) => !e.target.value && setSearchKeyword('')}
              />
            }
          >
            <List
              dataSource={filteredEmployees}
              grid={{ gutter: 16, column: 3 }}
              renderItem={(item) => (
                <List.Item>
                  <Card hoverable size="small" onClick={() => showEmployeeDetail(item)}>
                    <Card.Meta
                      avatar={<Avatar src={item.avatar} icon={<UserOutlined />} size={48} />}
                      title={item.name}
                      description={
                        <>
                          <Tag color="blue">{item.department}</Tag>
                          <div style={{ marginTop: 4 }}>{item.position}</div>
                        </>
                      }
                    />
                    <Space style={{ marginTop: 12 }}>
                      <Button type="link" size="small" icon={<PhoneOutlined />} onClick={(e) => { e.stopPropagation(); handleCall(item.phone); }}>
                        电话
                      </Button>
                      <Button type="link" size="small" icon={<MailOutlined />} onClick={(e) => { e.stopPropagation(); handleEmail(item.email); }}>
                        邮件
                      </Button>
                    </Space>
                  </Card>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Drawer
        title="员工详情"
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        width={400}
      >
        {currentEmployee && (
          <>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Avatar src={currentEmployee.avatar} icon={<UserOutlined />} size={80} />
              <Title level={4} style={{ marginTop: 12, marginBottom: 4 }}>{currentEmployee.name}</Title>
              <Tag color="blue">{currentEmployee.department}</Tag>
            </div>
            <Descriptions column={1} bordered size="small">
              <Descriptions.Item label="职位">{currentEmployee.position}</Descriptions.Item>
              <Descriptions.Item label="电话">{currentEmployee.phone}</Descriptions.Item>
              <Descriptions.Item label="邮箱">{currentEmployee.email}</Descriptions.Item>
            </Descriptions>
            <Space style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}>
              <Button type="primary" icon={<PhoneOutlined />} onClick={() => handleCall(currentEmployee.phone)}>拨打电话</Button>
              <Button icon={<MailOutlined />} onClick={() => handleEmail(currentEmployee.email)}>发送邮件</Button>
            </Space>
          </>
        )}
      </Drawer>
    </div>
  );
}

export default Contacts;

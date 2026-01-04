import { useState } from 'react';
import { Card, Row, Col, Typography, Tag, Space, Select, Statistic, Progress, Drawer, Descriptions, List, Button, Modal, Form, DatePicker, Input, message } from 'antd';
import { CarOutlined, EnvironmentOutlined, ThunderboltOutlined, DashboardOutlined, PlusOutlined } from '@ant-design/icons';
import { mockVehicles, getVehicleStats } from '../../mocks/vehicle';
import type { Vehicle } from '../../types';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

function VehiclePage() {
  const [vehicles] = useState<Vehicle[]>(mockVehicles);
  const [statusFilter, setStatusFilter] = useState<Vehicle['status'] | 'all'>('all');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState<Vehicle | null>(null);
  const [bookingVisible, setBookingVisible] = useState(false);
  const [form] = Form.useForm();

  const stats = getVehicleStats();

  const statusConfig: Record<Vehicle['status'], { color: string; text: string }> = {
    available: { color: 'success', text: '可用' },
    'in-use': { color: 'processing', text: '使用中' },
    maintenance: { color: 'warning', text: '维修中' },
    charging: { color: 'default', text: '充电中' },
  };

  const filteredVehicles = statusFilter === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.status === statusFilter);

  const availableVehicles = vehicles.filter(v => v.status === 'available');

  const showDetail = (vehicle: Vehicle) => {
    setCurrentVehicle(vehicle);
    setDrawerVisible(true);
  };

  const handleBooking = () => {
    form.validateFields().then(values => {
      console.log('预约信息:', values);
      message.success('车辆预约申请已提交！');
      setBookingVisible(false);
      form.resetFields();
    });
  };

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col><Title level={2} style={{ margin: 0 }}>车辆管理</Title></Col>
        <Col><Button type="primary" icon={<PlusOutlined />} onClick={() => setBookingVisible(true)}>预约车辆</Button></Col>
      </Row>

      {/* 统计卡片 */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={4}>
          <Card size="small"><Statistic title="车辆总数" value={stats.total} prefix={<CarOutlined />} /></Card>
        </Col>
        <Col span={5}>
          <Card size="small"><Statistic title="可用" value={stats.available} valueStyle={{ color: '#52c41a' }} /></Card>
        </Col>
        <Col span={5}>
          <Card size="small"><Statistic title="使用中" value={stats.inUse} valueStyle={{ color: '#1890ff' }} /></Card>
        </Col>
        <Col span={5}>
          <Card size="small"><Statistic title="维修中" value={stats.maintenance} valueStyle={{ color: '#faad14' }} /></Card>
        </Col>
        <Col span={5}>
          <Card size="small"><Statistic title="充电中" value={stats.charging} valueStyle={{ color: '#666' }} /></Card>
        </Col>
      </Row>

      {/* 筛选和列表 */}
      <Card
        title="车辆列表"
        extra={
          <Space>
            <Text>状态筛选：</Text>
            <Select value={statusFilter} onChange={setStatusFilter} style={{ width: 120 }}>
              <Select.Option value="all">全部</Select.Option>
              <Select.Option value="available">可用</Select.Option>
              <Select.Option value="in-use">使用中</Select.Option>
              <Select.Option value="maintenance">维修中</Select.Option>
              <Select.Option value="charging">充电中</Select.Option>
            </Select>
          </Space>
        }
      >
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={filteredVehicles}
          renderItem={(item) => (
            <List.Item>
              <Card hoverable size="small" onClick={() => showDetail(item)}>
                <div style={{ textAlign: 'center', marginBottom: 12 }}>
                  <CarOutlined style={{ fontSize: 36, color: '#1890ff' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Title level={5} style={{ margin: 0 }}>{item.plate}</Title>
                  <Text type="secondary">{item.model}</Text>
                </div>
                <div style={{ marginTop: 12, textAlign: 'center' }}>
                  <Tag color={statusConfig[item.status].color}>{statusConfig[item.status].text}</Tag>
                </div>
                {item.battery !== undefined && (
                  <div style={{ marginTop: 12 }}>
                    <Text type="secondary" style={{ fontSize: 12 }}>电量</Text>
                    <Progress percent={item.battery} size="small" status={item.battery < 20 ? 'exception' : 'normal'} />
                  </div>
                )}
                <div style={{ marginTop: 8 }}>
                  <Space>
                    <EnvironmentOutlined style={{ color: '#999' }} />
                    <Text type="secondary" style={{ fontSize: 12 }}>{item.location}</Text>
                  </Space>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </Card>

      <Drawer
        title="车辆详情"
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        width={400}
      >
        {currentVehicle && (
          <>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <CarOutlined style={{ fontSize: 48, color: '#1890ff' }} />
              <Title level={4} style={{ marginTop: 12, marginBottom: 4 }}>{currentVehicle.plate}</Title>
              <Text type="secondary">{currentVehicle.model}</Text>
              <div style={{ marginTop: 8 }}>
                <Tag color={statusConfig[currentVehicle.status].color}>{statusConfig[currentVehicle.status].text}</Tag>
              </div>
            </div>
            <Descriptions column={1} bordered size="small">
              <Descriptions.Item label={<><DashboardOutlined /> 里程</>}>{currentVehicle.mileage.toLocaleString()} km</Descriptions.Item>
              {currentVehicle.battery !== undefined && (
                <Descriptions.Item label={<><ThunderboltOutlined /> 电量</>}>
                  <Progress percent={currentVehicle.battery} size="small" style={{ width: 150 }} />
                </Descriptions.Item>
              )}
              <Descriptions.Item label={<><EnvironmentOutlined /> 位置</>}>{currentVehicle.location}</Descriptions.Item>
              {currentVehicle.driver && (
                <Descriptions.Item label="当前驾驶员">{currentVehicle.driver}</Descriptions.Item>
              )}
            </Descriptions>
          </>
        )}
      </Drawer>

      {/* 预约车辆弹窗 */}
      <Modal
        title="预约车辆"
        open={bookingVisible}
        onOk={handleBooking}
        onCancel={() => { setBookingVisible(false); form.resetFields(); }}
        okText="提交申请"
        cancelText="取消"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="vehicle" label="选择车辆" rules={[{ required: true, message: '请选择车辆' }]}>
            <Select placeholder="请选择要预约的车辆">
              {availableVehicles.map(v => (
                <Select.Option key={v.id} value={v.id}>{v.plate} - {v.model}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="timeRange" label="用车时间" rules={[{ required: true, message: '请选择用车时间' }]}>
            <RangePicker showTime format="YYYY-MM-DD HH:mm" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="destination" label="目的地" rules={[{ required: true, message: '请输入目的地' }]}>
            <Input placeholder="请输入目的地" />
          </Form.Item>
          <Form.Item name="reason" label="用车事由" rules={[{ required: true, message: '请输入用车事由' }]}>
            <TextArea rows={3} placeholder="请输入用车事由" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default VehiclePage;

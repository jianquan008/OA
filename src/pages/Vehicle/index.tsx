import { useState } from 'react';
import { Card, Row, Col, Typography, Tag, Space, Select, Statistic, Progress, Drawer, Descriptions, List } from 'antd';
import { CarOutlined, EnvironmentOutlined, ThunderboltOutlined, DashboardOutlined } from '@ant-design/icons';
import { mockVehicles, getVehicleStats } from '../../mocks/vehicle';
import type { Vehicle } from '../../types';

const { Title, Text } = Typography;

function VehiclePage() {
  const [vehicles] = useState<Vehicle[]>(mockVehicles);
  const [statusFilter, setStatusFilter] = useState<Vehicle['status'] | 'all'>('all');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState<Vehicle | null>(null);

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

  const showDetail = (vehicle: Vehicle) => {
    setCurrentVehicle(vehicle);
    setDrawerVisible(true);
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>车辆管理</Title>

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
    </div>
  );
}

export default VehiclePage;

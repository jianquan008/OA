import { useState } from 'react';
import { Card, Row, Col, Typography, Calendar, Badge, List, Tag, Button, Modal, Form, Input, DatePicker, Select, Radio, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { mockScheduleEvents } from '../../mocks/schedule';
import type { ScheduleEvent } from '../../types';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

function Schedule() {
  const [events, setEvents] = useState<ScheduleEvent[]>(mockScheduleEvents);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  const typeConfig: Record<ScheduleEvent['type'], { color: string; text: string }> = {
    work: { color: 'blue', text: '工作' },
    meeting: { color: 'green', text: '会议' },
    personal: { color: 'purple', text: '个人' },
  };

  const getListData = (value: Dayjs) => {
    const dateStr = value.format('YYYY-MM-DD');
    return events.filter(event => event.startTime.startsWith(dateStr));
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {listData.slice(0, 2).map(item => (
          <li key={item.id}>
            <Badge color={typeConfig[item.type].color} text={<span style={{ fontSize: 12 }}>{item.title}</span>} />
          </li>
        ))}
        {listData.length > 2 && <li><Text type="secondary" style={{ fontSize: 12 }}>还有 {listData.length - 2} 项...</Text></li>}
      </ul>
    );
  };

  const selectedDateEvents = getListData(selectedDate);

  const handleAddEvent = () => {
    form.validateFields().then(values => {
      const newEvent: ScheduleEvent = {
        id: String(Date.now()),
        title: values.title,
        description: values.description || '',
        startTime: values.timeRange[0].format('YYYY-MM-DD HH:mm:ss'),
        endTime: values.timeRange[1].format('YYYY-MM-DD HH:mm:ss'),
        type: values.type,
        reminder: values.reminder,
      };
      setEvents([...events, newEvent]);
      setModalVisible(false);
      form.resetFields();
      message.success('日程创建成功');
    });
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(e => e.id !== id));
    message.success('日程已删除');
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>日程管理</Title>

      <Row gutter={16}>
        <Col span={16}>
          <Card>
            <Calendar
              cellRender={(date, info) => info.type === 'date' ? dateCellRender(date) : null}
              onSelect={(date) => setSelectedDate(date)}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title={`${selectedDate.format('YYYY年MM月DD日')} 日程`}
            extra={<Button type="primary" icon={<PlusOutlined />} onClick={() => setModalVisible(true)}>新建日程</Button>}
          >
            <div style={{ marginBottom: 16 }}>
              <Text type="secondary">日程分类：</Text>
              {Object.entries(typeConfig).map(([key, val]) => (
                <Tag key={key} color={val.color} style={{ marginLeft: 8 }}>{val.text}</Tag>
              ))}
            </div>

            <List
              dataSource={selectedDateEvents}
              locale={{ emptyText: '当天暂无日程' }}
              renderItem={(item) => (
                <List.Item
                  actions={[<Button type="link" danger size="small" onClick={() => handleDeleteEvent(item.id)}>删除</Button>]}
                >
                  <List.Item.Meta
                    title={<><Tag color={typeConfig[item.type].color}>{typeConfig[item.type].text}</Tag>{item.title}</>}
                    description={
                      <>
                        <div>{item.startTime.slice(11, 16)} - {item.endTime.slice(11, 16)}</div>
                        {item.description && <div>{item.description}</div>}
                        {item.reminder && <Tag color="orange" style={{ marginTop: 4 }}>已设提醒</Tag>}
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Modal
        title="新建日程"
        open={modalVisible}
        onOk={handleAddEvent}
        onCancel={() => { setModalVisible(false); form.resetFields(); }}
        okText="创建"
        cancelText="取消"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="日程标题" rules={[{ required: true, message: '请输入日程标题' }]}>
            <Input placeholder="请输入日程标题" />
          </Form.Item>
          <Form.Item name="type" label="日程类型" rules={[{ required: true, message: '请选择日程类型' }]}>
            <Select placeholder="请选择日程类型">
              <Select.Option value="work">工作</Select.Option>
              <Select.Option value="meeting">会议</Select.Option>
              <Select.Option value="personal">个人</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="timeRange" label="时间范围" rules={[{ required: true, message: '请选择时间范围' }]}>
            <RangePicker showTime format="YYYY-MM-DD HH:mm" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="description" label="描述">
            <TextArea rows={3} placeholder="请输入日程描述" />
          </Form.Item>
          <Form.Item name="reminder" label="提醒" initialValue={true}>
            <Radio.Group>
              <Radio value={true}>开启提醒</Radio>
              <Radio value={false}>不提醒</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Schedule;

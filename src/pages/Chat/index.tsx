import { useState, useRef, useEffect } from 'react';
import { Card, Row, Col, Typography, Input, Button, List, Avatar, Tag, Space } from 'antd';
import { SendOutlined, RobotOutlined, UserOutlined } from '@ant-design/icons';
import { mockChatHistory, mockQuickQuestions, generateAIResponse } from '../../mocks/chat';
import type { ChatMessage } from '../../types';

const { Title, Text } = Typography;
const { TextArea } = Input;

function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatHistory);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (content?: string) => {
    const messageContent = content || inputValue.trim();
    if (!messageContent) return;

    // 添加用户消息
    const userMessage: ChatMessage = {
      id: String(Date.now()),
      content: messageContent,
      sender: 'user',
      timestamp: new Date().toLocaleString(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    // 模拟 AI 回复延迟
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: String(Date.now() + 1),
        content: generateAIResponse(messageContent),
        sender: 'ai',
        timestamp: new Date().toLocaleString(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setLoading(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>AI 智能助手</Title>

      <Row gutter={16}>
        <Col span={18}>
          <Card
            style={{ height: 600, display: 'flex', flexDirection: 'column' }}
            bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 0 }}
          >
            {/* 消息列表 */}
            <div style={{ flex: 1, overflow: 'auto', padding: 16 }}>
              <List
                dataSource={messages}
                renderItem={(item) => (
                  <List.Item style={{ border: 'none', padding: '8px 0', justifyContent: item.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <Space align="start" style={{ flexDirection: item.sender === 'user' ? 'row-reverse' : 'row' }}>
                      <Avatar
                        icon={item.sender === 'ai' ? <RobotOutlined /> : <UserOutlined />}
                        style={{ backgroundColor: item.sender === 'ai' ? '#1890ff' : '#87d068' }}
                      />
                      <div
                        style={{
                          maxWidth: 400,
                          padding: '8px 12px',
                          borderRadius: 8,
                          backgroundColor: item.sender === 'user' ? '#1890ff' : '#f0f0f0',
                          color: item.sender === 'ai' ? 'red' : item.sender === 'user' ? '#fff' : '#333',
                          fontWeight: item.sender === 'ai' ? 'bold' : 'normal',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        {item.content}
                        <div style={{ fontSize: 11, marginTop: 4, opacity: 0.7 }}>{item.timestamp}</div>
                      </div>
                    </Space>
                  </List.Item>
                )}
              />
              {loading && (
                <div style={{ padding: '8px 0' }}>
                  <Space>
                    <Avatar icon={<RobotOutlined />} style={{ backgroundColor: '#1890ff' }} />
                    <div style={{ padding: '8px 12px', borderRadius: 8, backgroundColor: '#f0f0f0' }}>
                      <Text type="secondary">正在输入...</Text>
                    </div>
                  </Space>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* 输入区域 */}
            <div style={{ padding: 16, borderTop: '1px solid #f0f0f0' }}>
              <Space.Compact style={{ width: '100%' }}>
                <TextArea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="输入您的问题，按 Enter 发送..."
                  autoSize={{ minRows: 1, maxRows: 3 }}
                  style={{ resize: 'none' }}
                />
                <Button type="primary" icon={<SendOutlined />} onClick={() => handleSend()} loading={loading}>
                  发送
                </Button>
              </Space.Compact>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card title="常见问题" size="small">
            <List
              dataSource={mockQuickQuestions}
              renderItem={(item) => (
                <List.Item style={{ padding: '8px 0', cursor: 'pointer' }} onClick={() => handleSend(item)}>
                  <Tag color="blue" style={{ cursor: 'pointer' }}>{item}</Tag>
                </List.Item>
              )}
            />
          </Card>

          <Card title="使用提示" size="small" style={{ marginTop: 16 }}>
            <List size="small">
              <List.Item><Text type="secondary">• 可以询问会议安排</Text></List.Item>
              <List.Item><Text type="secondary">• 可以查询待办事项</Text></List.Item>
              <List.Item><Text type="secondary">• 可以了解请假流程</Text></List.Item>
              <List.Item><Text type="secondary">• 可以查询车辆状态</Text></List.Item>
            </List>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Chat;

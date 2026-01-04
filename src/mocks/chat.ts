import type { ChatMessage } from '@/types';

// 历史聊天记录
export const mockChatHistory: ChatMessage[] = [
  {
    id: '1',
    content: '你好，我是办公智能助手，有什么可以帮助您的吗？',
    sender: 'ai',
    timestamp: '2024-01-15 09:00:00',
  },
  {
    id: '2',
    content: '请帮我查询一下今天的会议安排',
    sender: 'user',
    timestamp: '2024-01-15 09:01:00',
  },
  {
    id: '3',
    content: '根据您的日程安排，今天有以下会议：\n1. 14:00-16:00 产品需求评审会议\n2. 16:30-17:30 周例会\n\n需要我为您做什么准备吗？',
    sender: 'ai',
    timestamp: '2024-01-15 09:01:30',
  },
];

// 常见问题
export const mockQuickQuestions = [
  '今天有什么会议？',
  '帮我查看待办事项',
  '如何申请请假？',
  '公司有哪些车辆可用？',
  '最新的公告通知是什么？',
  '如何联系技术部同事？',
];

// AI 回复模板
export const aiResponses = {
  greeting: [
    '您好！我是您的办公智能助手，很高兴为您服务！',
    '欢迎使用办公助手！有什么需要帮助的吗？',
    '您好！我可以帮您处理各种办公事务，请告诉我您的需求。',
  ],
  meeting: [
    '我来为您查询今天的会议安排...',
    '根据您的日程，今天的会议安排如下：',
    '让我帮您整理一下今天的会议信息：',
  ],
  todo: [
    '这是您今天的待办事项清单：',
    '您今天需要处理的事项包括：',
    '让我为您整理今天的任务：',
  ],
  leave: [
    '申请请假很简单，您可以：\n1. 进入"审批流程"页面\n2. 点击"新建申请"\n3. 选择"请假申请"\n4. 填写相关信息并提交',
    '请假申请流程：访问审批流程 → 新建申请 → 选择请假类型 → 填写申请信息',
  ],
  vehicle: [
    '让我为您查询可用车辆信息...',
    '当前车辆使用情况如下：',
    '这是最新的车辆状态：',
  ],
  notice: [
    '最新的公告通知：',
    '这是近期发布的重要通知：',
    '让我为您查看最新公告：',
  ],
  contact: [
    '我来帮您查找联系人信息...',
    '技术部同事联系方式：',
    '相关人员联系信息如下：',
  ],
  default: [
    '抱歉，我没有完全理解您的问题。您可以尝试：\n• 查询今天的会议安排\n• 查看待办事项\n• 了解请假流程\n• 查询车辆状态',
    '我正在学习中，暂时无法回答这个问题。您可以尝试询问关于会议、待办、审批、车辆等相关问题。',
    '让我换个方式来帮助您。请问您是想了解：\n1. 日程安排\n2. 待办事项\n3. 审批流程\n4. 车辆管理\n5. 通讯录',
  ],
};

// 生成 AI 回复
export function generateAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('你好') || message.includes('hello')) {
    return getRandomResponse(aiResponses.greeting);
  }
  
  if (message.includes('会议') || message.includes('meeting')) {
    return getRandomResponse(aiResponses.meeting);
  }
  
  if (message.includes('待办') || message.includes('任务') || message.includes('todo')) {
    return getRandomResponse(aiResponses.todo);
  }
  
  if (message.includes('请假') || message.includes('leave')) {
    return getRandomResponse(aiResponses.leave);
  }
  
  if (message.includes('车辆') || message.includes('vehicle')) {
    return getRandomResponse(aiResponses.vehicle);
  }
  
  if (message.includes('公告') || message.includes('通知') || message.includes('notice')) {
    return getRandomResponse(aiResponses.notice);
  }
  
  if (message.includes('联系') || message.includes('同事') || message.includes('contact')) {
    return getRandomResponse(aiResponses.contact);
  }
  
  return getRandomResponse(aiResponses.default);
}

function getRandomResponse(responses: string[]): string {
  return responses[Math.floor(Math.random() * responses.length)];
}

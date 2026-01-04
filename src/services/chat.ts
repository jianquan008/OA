import { request } from '@/utils/request';
import type { ChatMessage, ApiResponse } from '@/types';
import { mockChatHistory, mockQuickQuestions, generateAIResponse } from '@/mocks/chat';

let chatHistory = [...mockChatHistory];

// 获取聊天历史
export async function getChatHistory(): Promise<ApiResponse<ChatMessage[]>> {
  return request('/api/chat/history', {
    method: 'GET',
  }).then(() => ({
    success: true,
    data: chatHistory,
  }));
}

// 发送消息
export async function sendMessage(content: string): Promise<ApiResponse<ChatMessage>> {
  return request('/api/chat/send', {
    method: 'POST',
    data: { content },
  }).then(() => {
    // 添加用户消息
    const userMessage: ChatMessage = {
      id: String(chatHistory.length + 1),
      content,
      sender: 'user',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
    };
    chatHistory.push(userMessage);
    
    // 生成 AI 回复
    const aiReply = generateAIResponse(content);
    const aiMessage: ChatMessage = {
      id: String(chatHistory.length + 1),
      content: aiReply,
      sender: 'ai',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
    };
    chatHistory.push(aiMessage);
    
    return {
      success: true,
      data: aiMessage,
    };
  });
}

// 获取快捷问题
export async function getQuickQuestions(): Promise<ApiResponse<string[]>> {
  return request('/api/chat/quick-questions', {
    method: 'GET',
  }).then(() => ({
    success: true,
    data: mockQuickQuestions,
  }));
}

// 清空聊天历史
export async function clearChatHistory(): Promise<ApiResponse<boolean>> {
  return request('/api/chat/clear', {
    method: 'DELETE',
  }).then(() => {
    chatHistory = [];
    
    return {
      success: true,
      data: true,
    };
  });
}

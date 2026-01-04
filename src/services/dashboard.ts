import { request } from '@/utils/request';
import type { DashboardStats, TodoItem, Notice, ApiResponse } from '@/types';
import { mockDashboardStats, mockTodoList, mockNotices } from '@/mocks/dashboard';

// 获取仪表盘统计数据
export async function getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
  return request('/api/dashboard/stats', {
    method: 'GET',
  }).then(() => ({
    success: true,
    data: mockDashboardStats,
  }));
}

// 获取待办事项列表
export async function getTodoList(): Promise<ApiResponse<TodoItem[]>> {
  return request('/api/dashboard/todos', {
    method: 'GET',
  }).then(() => ({
    success: true,
    data: mockTodoList,
  }));
}

// 获取公告通知列表
export async function getNotices(): Promise<ApiResponse<Notice[]>> {
  return request('/api/dashboard/notices', {
    method: 'GET',
  }).then(() => ({
    success: true,
    data: mockNotices,
  }));
}

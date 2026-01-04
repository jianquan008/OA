import type { DashboardStats, TodoItem, Notice } from '@/types';

// 仪表盘统计数据
export const mockDashboardStats: DashboardStats = {
  todoCount: 8,
  approvalCount: 3,
  meetingCount: 5,
  noticeCount: 2,
};

// 待办事项数据
export const mockTodoList: TodoItem[] = [
  {
    id: '1',
    title: '产品需求评审会议',
    type: 'meeting',
    time: '14:00',
    urgent: true,
  },
  {
    id: '2',
    title: '完成项目进度报告',
    type: 'task',
    time: '16:00',
    urgent: false,
  },
  {
    id: '3',
    title: '审批张三的请假申请',
    type: 'approval',
    time: '明天',
    urgent: false,
  },
  {
    id: '4',
    title: '客户沟通会议',
    type: 'meeting',
    time: '明天 10:00',
    urgent: true,
  },
];

// 公告通知数据
export const mockNotices: Notice[] = [
  {
    id: '1',
    title: '关于春节放假安排的通知',
    content: '根据国家法定节假日安排，春节放假时间为2月10日至2月17日，共8天。',
    publishTime: '2024-01-15 09:00:00',
    type: 'announcement',
  },
  {
    id: '2',
    title: '系统维护通知',
    content: '系统将于本周六晚上22:00-24:00进行维护升级，期间可能影响正常使用。',
    publishTime: '2024-01-14 16:30:00',
    type: 'system',
  },
  {
    id: '3',
    title: '新员工入职培训',
    content: '本月新员工入职培训将于1月20日在会议室A举行，请相关人员准时参加。',
    publishTime: '2024-01-13 11:00:00',
    type: 'news',
  },
];

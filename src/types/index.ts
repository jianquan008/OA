// 用户相关
export interface User {
  id: string;
  name: string;
  avatar: string;
  department: string;
  position: string;
  phone: string;
  email: string;
}

// 仪表盘统计
export interface DashboardStats {
  todoCount: number;
  approvalCount: number;
  meetingCount: number;
  noticeCount: number;
}

// 待办事项
export interface TodoItem {
  id: string;
  title: string;
  type: 'meeting' | 'task' | 'approval';
  time: string;
  urgent: boolean;
}

// 公告通知
export interface Notice {
  id: string;
  title: string;
  content: string;
  publishTime: string;
  type: 'announcement' | 'news' | 'system';
}

// 日程事件
export interface ScheduleEvent {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  type: 'work' | 'meeting' | 'personal';
  reminder: boolean;
  attendees?: string[];
}

// 审批流程
export interface ApprovalItem {
  id: string;
  type: 'leave' | 'expense' | 'purchase';
  title: string;
  applicant: string;
  status: 'pending' | 'approved' | 'rejected';
  createTime: string;
  content: string;
  amount?: number;
}

// 组织架构
export interface Department {
  id: string;
  name: string;
  parentId?: string;
  children?: Department[];
  employees?: User[];
}

// 车辆信息
export interface Vehicle {
  id: string;
  plate: string;
  model: string;
  status: 'available' | 'in-use' | 'maintenance' | 'charging';
  mileage: number;
  battery?: number;
  location: string;
  driver?: string;
}

// 聊天消息
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

// API 响应类型
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// 表单数据类型
export interface CreateEventDto {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  type: 'work' | 'meeting' | 'personal';
  reminder: boolean;
  attendees?: string[];
}

export interface UpdateEventDto extends Partial<CreateEventDto> {}

export interface CreateApprovalDto {
  type: 'leave' | 'expense' | 'purchase';
  title: string;
  content: string;
  amount?: number;
}

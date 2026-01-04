import type { ApprovalItem } from '@/types';

export const mockApprovalList: ApprovalItem[] = [
  {
    id: '1',
    type: 'leave',
    title: '年假申请',
    applicant: '张三',
    status: 'pending',
    createTime: '2024-01-15 09:30:00',
    content: '申请2024年1月20日至1月25日年假，共5天。原因：回家过年。',
  },
  {
    id: '2',
    type: 'expense',
    title: '差旅费报销',
    applicant: '李四',
    status: 'pending',
    createTime: '2024-01-14 16:20:00',
    content: '出差北京产生的交通费和住宿费报销。',
    amount: 2800,
  },
  {
    id: '3',
    type: 'purchase',
    title: '办公设备采购',
    applicant: '王五',
    status: 'approved',
    createTime: '2024-01-13 11:15:00',
    content: '采购10台笔记本电脑用于新员工入职。',
    amount: 50000,
  },
  {
    id: '4',
    type: 'leave',
    title: '病假申请',
    applicant: '赵六',
    status: 'approved',
    createTime: '2024-01-12 08:45:00',
    content: '因感冒发烧需要请病假2天休息。',
  },
  {
    id: '5',
    type: 'expense',
    title: '培训费用报销',
    applicant: '钱七',
    status: 'rejected',
    createTime: '2024-01-11 14:30:00',
    content: '参加外部技术培训产生的费用报销。',
    amount: 3500,
  },
  {
    id: '6',
    type: 'purchase',
    title: '办公用品采购',
    applicant: '孙八',
    status: 'pending',
    createTime: '2024-01-10 10:20:00',
    content: '采购打印纸、文具等日常办公用品。',
    amount: 1200,
  },
];

// 根据状态筛选审批列表
export function getApprovalsByStatus(status?: 'pending' | 'approved' | 'rejected') {
  if (!status) return mockApprovalList;
  return mockApprovalList.filter(item => item.status === status);
}

// 根据申请人筛选（模拟"我发起的"）
export function getMyApprovals(applicant: string = '当前用户') {
  return mockApprovalList.filter(item => item.applicant === applicant);
}

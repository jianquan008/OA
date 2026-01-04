import type { ScheduleEvent } from '@/types';

export const mockScheduleEvents: ScheduleEvent[] = [
  {
    id: '1',
    title: '产品需求评审会议',
    description: '讨论Q1产品功能需求和优先级',
    startTime: '2024-01-15 14:00:00',
    endTime: '2024-01-15 16:00:00',
    type: 'meeting',
    reminder: true,
    attendees: ['张三', '李四', '王五'],
  },
  {
    id: '2',
    title: '项目进度汇报',
    description: '向领导汇报本周项目进展情况',
    startTime: '2024-01-16 10:00:00',
    endTime: '2024-01-16 11:00:00',
    type: 'work',
    reminder: true,
  },
  {
    id: '3',
    title: '客户沟通会议',
    description: '与客户讨论合作方案细节',
    startTime: '2024-01-17 15:00:00',
    endTime: '2024-01-17 17:00:00',
    type: 'meeting',
    reminder: true,
    attendees: ['客户代表', '销售经理'],
  },
  {
    id: '4',
    title: '团队建设活动',
    description: '部门团队聚餐活动',
    startTime: '2024-01-18 18:00:00',
    endTime: '2024-01-18 21:00:00',
    type: 'personal',
    reminder: false,
  },
  {
    id: '5',
    title: '技术分享会',
    description: '分享最新的前端技术趋势',
    startTime: '2024-01-19 14:00:00',
    endTime: '2024-01-19 15:30:00',
    type: 'work',
    reminder: true,
  },
];

// 生成更多日程数据的辅助函数
export function generateScheduleEvents(count: number = 20): ScheduleEvent[] {
  const events: ScheduleEvent[] = [...mockScheduleEvents];
  const titles = [
    '周例会', '项目评审', '客户拜访', '培训课程', '头脑风暴',
    '代码审查', '需求分析', '系统测试', '产品演示', '团队会议'
  ];
  
  for (let i = events.length; i < count; i++) {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 30));
    const hour = 9 + Math.floor(Math.random() * 9);
    const startTime = new Date(date);
    startTime.setHours(hour, 0, 0, 0);
    const endTime = new Date(startTime);
    endTime.setHours(hour + 1 + Math.floor(Math.random() * 2));
    
    events.push({
      id: String(i + 1),
      title: titles[Math.floor(Math.random() * titles.length)],
      description: '这是一个示例日程描述',
      startTime: startTime.toISOString().slice(0, 19).replace('T', ' '),
      endTime: endTime.toISOString().slice(0, 19).replace('T', ' '),
      type: ['work', 'meeting', 'personal'][Math.floor(Math.random() * 3)] as any,
      reminder: Math.random() > 0.3,
    });
  }
  
  return events;
}

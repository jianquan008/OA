// 菜单配置
export const MENU_ITEMS = [
  {
    key: '/',
    label: '首页',
    icon: 'DashboardOutlined',
  },
  {
    key: '/schedule',
    label: '日程管理',
    icon: 'CalendarOutlined',
  },
  {
    key: '/approval',
    label: '审批流程',
    icon: 'AuditOutlined',
  },
  {
    key: '/contacts',
    label: '通讯录',
    icon: 'ContactsOutlined',
  },
  {
    key: '/vehicle',
    label: '车辆管理',
    icon: 'CarOutlined',
  },
  {
    key: '/chat',
    label: 'AI 助手',
    icon: 'RobotOutlined',
  },
];

// 审批类型
export const APPROVAL_TYPES = {
  leave: '请假',
  expense: '报销',
  purchase: '采购',
};

// 审批状态
export const APPROVAL_STATUS = {
  pending: '待审批',
  approved: '已通过',
  rejected: '已拒绝',
};

// 车辆状态
export const VEHICLE_STATUS = {
  available: '可用',
  'in-use': '使用中',
  maintenance: '维修中',
  charging: '充电中',
};

// 日程类型
export const SCHEDULE_TYPES = {
  work: '工作',
  meeting: '会议',
  personal: '个人',
};

// 日期格式
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const TIME_FORMAT = 'HH:mm';

import type { Department, User } from '@/types';

// 员工数据
export const mockEmployees: User[] = [
  {
    id: '1',
    name: '张三',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang',
    department: '技术部',
    position: '前端工程师',
    phone: '138****1234',
    email: 'zhangsan@company.com',
  },
  {
    id: '2',
    name: '李四',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Li',
    department: '技术部',
    position: '后端工程师',
    phone: '139****5678',
    email: 'lisi@company.com',
  },
  {
    id: '3',
    name: '王五',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wang',
    department: '产品部',
    position: '产品经理',
    phone: '136****9012',
    email: 'wangwu@company.com',
  },
  {
    id: '4',
    name: '赵六',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhao',
    department: '设计部',
    position: 'UI设计师',
    phone: '137****3456',
    email: 'zhaoliu@company.com',
  },
  {
    id: '5',
    name: '钱七',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Qian',
    department: '市场部',
    position: '市场专员',
    phone: '135****7890',
    email: 'qianqi@company.com',
  },
  {
    id: '6',
    name: '孙八',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sun',
    department: '人事部',
    position: 'HR专员',
    phone: '134****2345',
    email: 'sunba@company.com',
  },
  {
    id: '7',
    name: '周九',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhou',
    department: '财务部',
    position: '会计',
    phone: '133****6789',
    email: 'zhoujiu@company.com',
  },
  {
    id: '8',
    name: '吴十',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wu',
    department: '技术部',
    position: '技术总监',
    phone: '132****0123',
    email: 'wushi@company.com',
  },
];

// 组织架构数据
export const mockDepartments: Department[] = [
  {
    id: '1',
    name: '公司总部',
    children: [
      {
        id: '2',
        name: '技术部',
        parentId: '1',
        employees: mockEmployees.filter(emp => emp.department === '技术部'),
      },
      {
        id: '3',
        name: '产品部',
        parentId: '1',
        employees: mockEmployees.filter(emp => emp.department === '产品部'),
      },
      {
        id: '4',
        name: '设计部',
        parentId: '1',
        employees: mockEmployees.filter(emp => emp.department === '设计部'),
      },
      {
        id: '5',
        name: '市场部',
        parentId: '1',
        employees: mockEmployees.filter(emp => emp.department === '市场部'),
      },
      {
        id: '6',
        name: '人事部',
        parentId: '1',
        employees: mockEmployees.filter(emp => emp.department === '人事部'),
      },
      {
        id: '7',
        name: '财务部',
        parentId: '1',
        employees: mockEmployees.filter(emp => emp.department === '财务部'),
      },
    ],
  },
];

// 根据部门筛选员工
export function getEmployeesByDepartment(department?: string) {
  if (!department) return mockEmployees;
  return mockEmployees.filter(emp => emp.department === department);
}

// 搜索员工
export function searchEmployees(keyword: string) {
  if (!keyword) return mockEmployees;
  const lowerKeyword = keyword.toLowerCase();
  return mockEmployees.filter(emp => 
    emp.name.toLowerCase().includes(lowerKeyword) ||
    emp.department.toLowerCase().includes(lowerKeyword) ||
    emp.position.toLowerCase().includes(lowerKeyword)
  );
}

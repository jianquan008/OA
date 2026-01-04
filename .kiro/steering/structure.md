# 项目结构与架构

## 目录结构

```
project/
├── src/                    # 源代码
│   ├── components/         # 可复用组件
│   │   └── common/         # 通用基础组件
│   ├── pages/              # 页面组件
│   ├── hooks/              # 自定义 Hooks
│   ├── services/           # API 服务层
│   ├── utils/              # 工具函数
│   ├── types/              # 类型定义
│   ├── styles/             # 样式文件
│   └── main.tsx            # 入口文件
├── public/                 # 静态资源
├── .kiro/                  # Kiro 配置
│   ├── steering/           # Steering 文件
│   ├── specs/              # Spec 文档
│   └── tests/              # 测试报告
├── package.json
└── README.md
```

---

## 分层架构

```
┌─────────────────────────────────────┐
│         Pages (路由页面)              │
│  - 页面级组件、页面布局               │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│       Components (组件层)            │
│  - 业务组件、通用组件                 │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│        Hooks (逻辑层)                │
│  - 自定义 Hooks、状态管理             │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│       Services (服务层)              │
│  - API 调用、数据转换                 │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│        Utils (工具层)                │
│  - 通用工具函数、常量                 │
└─────────────────────────────────────┘
```

---

## 组件设计模式

### 容器组件 vs 展示组件

**容器组件（Smart Component）** - 负责数据获取和业务逻辑：
```typescript
function UserListContainer() {
  const { data, loading } = useRequest(getUserList);
  const handleDelete = async (id: string) => {
    await deleteUser(id);
  };
  
  return <UserListView data={data} loading={loading} onDelete={handleDelete} />;
}
```

**展示组件（Dumb Component）** - 只负责 UI 渲染：
```typescript
interface UserListViewProps {
  data: User[];
  loading: boolean;
  onDelete: (id: string) => void;
}

function UserListView({ data, loading, onDelete }: UserListViewProps) {
  return (
    <Table 
      dataSource={data} 
      loading={loading}
      columns={[...]}
    />
  );
}
```

### 自定义 Hooks

将可复用的逻辑提取为自定义 Hooks：
```typescript
// src/hooks/useUserInfo.ts
function useUserInfo(userId: string) {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    getUserInfo(userId)
      .then(setData)
      .finally(() => setLoading(false));
  }, [userId]);
  
  return { userInfo: data, loading };
}
```

---

## 组件库使用指南

### Ant Design 组件

#### 表单组件
```typescript
import { Form, Input, Button, Select } from 'antd';

function UserForm() {
  const [form] = Form.useForm();
  
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };
  
  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
        <Input placeholder="请输入姓名" />
      </Form.Item>
      <Form.Item name="status" label="状态">
        <Select placeholder="请选择状态">
          <Select.Option value="active">激活</Select.Option>
          <Select.Option value="inactive">未激活</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
}
```

#### 表格组件
```typescript
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

function UserTable({ data, loading }: { data: User[]; loading: boolean }) {
  const columns: ColumnsType<User> = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '邮箱', dataIndex: 'email', key: 'email' },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type="link">编辑</Button>
          <Button type="link" danger>删除</Button>
        </Space>
      ),
    },
  ];
  
  return <Table columns={columns} dataSource={data} loading={loading} rowKey="id" />;
}
```

#### 弹窗组件
```typescript
import { Modal, Form, Input } from 'antd';

function UserFormModal({ visible, onCancel, onSubmit }: ModalProps) {
  const [form] = Form.useForm();
  
  const handleOk = async () => {
    const values = await form.validateFields();
    onSubmit(values);
  };
  
  return (
    <Modal
      title="新增用户"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
```

### 数据可视化

#### ECharts
```typescript
import ReactECharts from 'echarts-for-react';

function LineChart({ data }: { data: ChartData[] }) {
  const option = {
    xAxis: { type: 'category', data: data.map(d => d.name) },
    yAxis: { type: 'value' },
    series: [{ data: data.map(d => d.value), type: 'line', smooth: true }],
    tooltip: { trigger: 'axis' },
  };
  
  return <ReactECharts option={option} style={{ height: 400 }} />;
}
```

#### Ant Design Charts
```typescript
import { Line, Pie, Column } from '@ant-design/plots';

function SalesChart({ data }: { data: SalesData[] }) {
  const config = {
    data,
    xField: 'month',
    yField: 'sales',
    smooth: true,
  };
  
  return <Line {...config} />;
}
```

---

## 模块组织

### 组件目录结构
```
components/
├── UserTable/
│   ├── index.tsx           # 组件实现
│   ├── UserTable.css       # 样式
│   └── types.ts            # 类型定义（可选）
├── UserForm/
│   ├── index.tsx
│   └── UserForm.css
└── common/                 # 通用组件
    ├── Button/
    ├── Input/
    └── Modal/
```

### 页面目录结构
```
pages/
├── UserManagement/
│   ├── index.tsx           # 页面入口
│   ├── UserManagement.css  # 页面样式
│   └── components/         # 页面私有组件（可选）
└── Dashboard/
    └── index.tsx
```

### 服务层结构
```
services/
├── userService.ts          # 用户相关 API
├── authService.ts          # 认证相关 API
└── index.ts                # 统一导出
```

---

## 文件命名规范

| 类型 | 命名规范 | 示例 |
|------|----------|------|
| React 组件 | PascalCase | `UserProfile.tsx` |
| 组件样式 | 同组件名 | `UserProfile.css` |
| 工具函数 | camelCase | `formatDate.ts` |
| 类型定义 | camelCase + .type | `user.type.ts` |
| 服务文件 | camelCase + Service | `userService.ts` |
| 自定义 Hook | use + 功能名 | `useUserInfo.ts` |
| 常量文件 | camelCase | `constants.ts` |

---

## 导入顺序

```typescript
// 1. React 相关
import React, { useState, useEffect, useMemo } from 'react';

// 2. 第三方库
import { Button, Form, Table } from 'antd';
import { useRequest } from 'ahooks';

// 3. 项目内部 - 组件
import { UserCard } from '@/components/UserCard';

// 4. 项目内部 - 服务和工具
import { getUserInfo } from '@/services/userService';
import { formatDate } from '@/utils/format';

// 5. 项目内部 - 类型
import type { User } from '@/types/user.type';

// 6. 样式文件
import './UserProfile.css';
```

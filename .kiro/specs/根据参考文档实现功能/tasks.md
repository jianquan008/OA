# 开发任务

## 概览
- **Feature**: 办公智能助手 Web 演示系统
- **任务数**: 8
- **API 策略**: Mock 数据

## 需求覆盖矩阵
| 需求 | 任务 |
|------|------|
| FR-001 首页仪表盘 | Task 0, Task 2 |
| FR-002 日程管理 | Task 0, Task 3 |
| FR-003 审批流程 | Task 0, Task 4 |
| FR-004 通讯录管理 | Task 0, Task 5 |
| FR-005 车辆管理 | Task 0, Task 6 |
| FR-006 AI 智能问答 | Task 0, Task 7 |
| FR-007 系统布局和导航 | Task 1 |

## 任务列表

### Task 0: 数据层准备
- **关联需求**: 全部
- **目标**: 创建 Mock 数据和 API 封装，确保前端可独立运行

**实施**:
1. 创建 `src/types/index.ts` - 定义所有数据类型接口
2. 创建 `src/mocks/` 目录下各模块 Mock 数据文件
3. 创建 `src/services/` 目录下各模块 API 服务封装
4. 创建 `src/utils/request.ts` - 统一请求封装

**文件**:
- `src/types/index.ts` - 统一类型定义
- `src/mocks/dashboard.ts` - 仪表盘 Mock 数据
- `src/mocks/schedule.ts` - 日程 Mock 数据
- `src/mocks/approval.ts` - 审批 Mock 数据
- `src/mocks/contacts.ts` - 通讯录 Mock 数据
- `src/mocks/vehicle.ts` - 车辆 Mock 数据
- `src/mocks/chat.ts` - 聊天 Mock 数据
- `src/services/dashboard.ts` - 仪表盘 API
- `src/services/schedule.ts` - 日程 API
- `src/services/approval.ts` - 审批 API
- `src/services/contacts.ts` - 通讯录 API
- `src/services/vehicle.ts` - 车辆 API
- `src/services/chat.ts` - 聊天 API
- `src/utils/request.ts` - 请求工具

**验证**: 导入不报错，Mock 数据结构正确，API 调用返回预期数据

---

### Task 1: 系统布局和路由框架
- **关联需求**: FR-007
- **目标**: 搭建系统整体布局框架和路由配置

**实施**:
1. 创建 Layout 组件（顶部导航 + 左侧菜单 + 主内容区）
2. 配置 React Router 路由系统
3. 创建菜单配置和导航逻辑
4. 实现响应式布局适配

**文件**:
- `src/components/Layout/index.tsx` - 主布局组件
- `src/components/Layout/Header.tsx` - 顶部导航栏
- `src/components/Layout/Sidebar.tsx` - 左侧菜单
- `src/App.tsx` - 路由配置和应用入口
- `src/utils/constants.ts` - 菜单配置常量

**验证**: 页面布局正确显示，路由跳转正常，菜单交互正常

---

### Task 2: 首页仪表盘实现
- **关联需求**: FR-001
- **目标**: 实现仪表盘数据展示和快捷入口功能
- **依赖**: Task 0, Task 1

**实施**:
1. 创建 Dashboard 页面组件
2. 实现统计卡片组件（待办、审批、会议数量）
3. 实现日程概览组件
4. 实现快捷入口组件
5. 实现公告通知轮播组件
6. 创建 useDashboard Hook 管理数据

**文件**:
- `src/pages/Dashboard/index.tsx` - 仪表盘主页面
- `src/components/StatCard/index.tsx` - 统计卡片组件
- `src/components/TodoList/index.tsx` - 待办列表组件
- `src/components/NoticeCarousel/index.tsx` - 公告轮播组件
- `src/components/QuickActions/index.tsx` - 快捷入口组件
- `src/hooks/useDashboard.ts` - 仪表盘数据管理

**验证**: 仪表盘数据正确显示，统计数字准确，快捷入口可点击跳转

---

### Task 3: 日程管理模块
- **关联需求**: FR-002
- **目标**: 实现完整的日程管理功能
- **依赖**: Task 0, Task 1

**实施**:
1. 创建 Schedule 页面组件
2. 集成 Ant Design Calendar 组件实现日历视图
3. 实现日程新建/编辑/删除表单
4. 实现日程列表视图和详情展示
5. 实现日程分类和提醒功能
6. 创建 useSchedule Hook 管理日程数据

**文件**:
- `src/pages/Schedule/index.tsx` - 日程管理主页面
- `src/components/CalendarView/index.tsx` - 日历视图组件
- `src/components/ScheduleForm/index.tsx` - 日程表单组件
- `src/components/ScheduleList/index.tsx` - 日程列表组件
- `src/hooks/useSchedule.ts` - 日程数据管理

**验证**: 日历视图正常，可创建/编辑/删除日程，日程分类和提醒功能正常

---

### Task 4: 审批流程模块
- **关联需求**: FR-003
- **目标**: 实现审批流程管理功能
- **依赖**: Task 0, Task 1

**实施**:
1. 创建 Approval 页面组件
2. 实现审批列表 Tabs（我发起的、待我审批、已审批）
3. 实现审批详情查看和操作功能
4. 实现审批表单（请假、报销、采购）
5. 实现审批状态管理和操作反馈
6. 创建 useApproval Hook 管理审批数据

**文件**:
- `src/pages/Approval/index.tsx` - 审批流程主页面
- `src/components/ApprovalTabs/index.tsx` - 审批标签页组件
- `src/components/ApprovalList/index.tsx` - 审批列表组件
- `src/components/ApprovalDetail/index.tsx` - 审批详情组件
- `src/components/ApprovalForm/index.tsx` - 审批表单组件
- `src/hooks/useApproval.ts` - 审批数据管理

**验证**: 审批列表正确分类显示，可查看详情，同意/拒绝操作正常

---

### Task 5: 通讯录模块
- **关联需求**: FR-004
- **目标**: 实现组织架构和员工信息管理
- **依赖**: Task 0, Task 1

**实施**:
1. 创建 Contacts 页面组件
2. 使用 Ant Design Tree 组件实现组织架构树
3. 实现员工列表和详情展示
4. 实现部门筛选和员工搜索功能
5. 实现快速联系功能（电话、邮件）
6. 创建 useContacts Hook 管理通讯录数据

**文件**:
- `src/pages/Contacts/index.tsx` - 通讯录主页面
- `src/components/OrgTree/index.tsx` - 组织架构树组件
- `src/components/EmployeeList/index.tsx` - 员工列表组件
- `src/components/EmployeeDetail/index.tsx` - 员工详情组件
- `src/components/SearchBar/index.tsx` - 搜索栏组件
- `src/hooks/useContacts.ts` - 通讯录数据管理

**验证**: 组织架构树正确展示，员工列表可筛选搜索，联系功能正常

---

### Task 6: 车辆管理模块
- **关联需求**: FR-005
- **目标**: 实现车辆状态监控和管理功能
- **依赖**: Task 0, Task 1

**实施**:
1. 创建 Vehicle 页面组件
2. 实现车辆列表和卡片展示
3. 实现车辆状态筛选功能
4. 实现车辆详情查看（里程、电量、位置）
5. 实现车辆状态标识和图标
6. 创建 useVehicle Hook 管理车辆数据

**文件**:
- `src/pages/Vehicle/index.tsx` - 车辆管理主页面
- `src/components/VehicleList/index.tsx` - 车辆列表组件
- `src/components/VehicleCard/index.tsx` - 车辆卡片组件
- `src/components/StatusFilter/index.tsx` - 状态筛选组件
- `src/components/VehicleDetail/index.tsx` - 车辆详情组件
- `src/hooks/useVehicle.ts` - 车辆数据管理

**验证**: 车辆列表正确显示，状态筛选正常，详情信息准确

---

### Task 7: AI 智能问答模块
- **关联需求**: FR-006
- **目标**: 实现 AI 智能问答交互功能
- **依赖**: Task 0, Task 1

**实施**:
1. 创建 Chat 页面组件
2. 实现聊天窗口和消息列表
3. 实现消息输入和发送功能
4. 实现常见问题快捷入口
5. 实现历史对话记录存储
6. 创建 useChat Hook 管理聊天数据

**文件**:
- `src/pages/Chat/index.tsx` - AI 问答主页面
- `src/components/ChatWindow/index.tsx` - 聊天窗口组件
- `src/components/MessageList/index.tsx` - 消息列表组件
- `src/components/InputArea/index.tsx` - 输入区域组件
- `src/components/QuickQuestions/index.tsx` - 快捷问题组件
- `src/hooks/useChat.ts` - 聊天数据管理

**验证**: 聊天界面正常，可发送消息并收到 AI 回复，历史记录正常

---

## 进度
| 任务 | 关联需求 | 状态 |
|------|----------|------|
| Task 0 | 全部 | ⬜ |
| Task 1 | FR-007 | ⬜ |
| Task 2 | FR-001 | ⬜ |
| Task 3 | FR-002 | ⬜ |
| Task 4 | FR-003 | ⬜ |
| Task 5 | FR-004 | ⬜ |
| Task 6 | FR-005 | ⬜ |
| Task 7 | FR-006 | ⬜ |

## 追溯链路
```
FR-001 (首页仪表盘) → Task 0, Task 2 → TC-001 (仪表盘测试用例)
FR-002 (日程管理) → Task 0, Task 3 → TC-002 (日程管理测试用例)
FR-003 (审批流程) → Task 0, Task 4 → TC-003 (审批流程测试用例)
FR-004 (通讯录管理) → Task 0, Task 5 → TC-004 (通讯录测试用例)
FR-005 (车辆管理) → Task 0, Task 6 → TC-005 (车辆管理测试用例)
FR-006 (AI 智能问答) → Task 0, Task 7 → TC-006 (AI 问答测试用例)
FR-007 (系统布局和导航) → Task 1 → TC-007 (布局导航测试用例)
```

## 注意事项
- Task 0 是基础任务，所有其他任务都依赖它
- Task 1 提供布局框架，页面模块任务都依赖它
- 每个页面模块任务相对独立，可并行开发
- 所有 Mock 数据需要覆盖完整的业务场景
- 组件设计要考虑复用性和可维护性

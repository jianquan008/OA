# AI-OA 智能办公助手

一个基于 React + TypeScript 的现代化办公自动化管理系统，提供智能化的办公解决方案。

## 🚀 项目概述

AI-OA（Artificial Intelligence Office Assistant）是一个集成多种办公功能的智能管理平台，旨在提高办公效率，简化日常工作流程。

## ✨ 核心功能

### 📊 首页仪表盘
- 数据统计概览
- 待办事项汇总
- 快捷操作入口
- 系统通知展示

### 📅 日程管理
- 日历视图
- 会议安排
- 任务提醒
- 日程同步

### ✅ 审批流程
- 请假申请
- 报销审批
- 采购申请
- 自定义审批流程

### 👥 通讯录
- 员工信息管理
- 组织架构展示
- 联系方式查询
- 部门管理

### 🚗 车辆管理
- 车辆信息展示
- 使用状态监控
- 调度管理
- 维护记录

### 💬 智能聊天
- AI 助手对话
- 智能问答
- 工作建议
- 快捷指令

## 🛠 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **UI 组件库**: Ant Design 5.x
- **路由管理**: React Router v6
- **构建工具**: Vite
- **包管理器**: pnpm
- **样式方案**: CSS Modules + Ant Design

## 📦 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Layout/         # 布局组件
│   └── common/         # 通用组件
├── pages/              # 页面组件
│   ├── Dashboard/      # 首页仪表盘
│   ├── Schedule/       # 日程管理
│   ├── Approval/       # 审批流程
│   ├── Contacts/       # 通讯录
│   ├── Vehicle/        # 车辆管理
│   └── Chat/           # 智能聊天
├── services/           # API 服务层
├── mocks/              # 模拟数据
├── types/              # 类型定义
├── utils/              # 工具函数
└── styles/             # 样式文件
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 7.0.0

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:5173 查看应用

### 构建生产版本

```bash
pnpm build
```

### 代码检查

```bash
pnpm lint
```

## 📋 开发规范

### 代码风格
- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 组件使用函数式声明
- Props 类型必须定义

### 命名规范
- 组件文件：PascalCase
- 工具函数：camelCase
- 常量：UPPER_SNAKE_CASE
- 样式类：kebab-case

### Git 提交规范
```
feat: 新功能
fix: Bug 修复
docs: 文档更新
style: 代码格式
refactor: 重构
perf: 性能优化
test: 测试相关
chore: 构建/工具变动
```

## 🔧 配置说明

### 环境变量
创建 `.env` 文件配置环境变量：
```
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=AI-OA 智能办公助手
```

### 代理配置
开发环境 API 代理在 `vite.config.ts` 中配置

## 📱 浏览器支持

- Chrome >= 88
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 项目维护者：开发团队
- 邮箱：dev@company.com
- 项目地址：https://github.com/company/ai-oa

## 🔄 更新日志

### v1.0.0 (2024-01-04)
- ✨ 初始版本发布
- 📊 完成首页仪表盘功能
- 📅 实现日程管理模块
- ✅ 添加审批流程功能
- 👥 完成通讯录管理
- 🚗 实现车辆管理系统
- 💬 集成智能聊天助手

---

**AI-OA 智能办公助手** - 让办公更智能，让工作更高效！

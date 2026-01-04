# Steering 模板

项目上下文和规范模板，为 Agent 提供项目背景和开发规范。

## 模板文件

| 文件 | 行数 | 内容 |
|------|------|------|
| `product.md` | 63 | 产品信息、语言规范（中文输出） |
| `structure.md` | 317 | 目录结构、架构模式、组件库使用指南 |
| `tech.md` | 520 | 代码规范、安全规范、性能优化、Git 工作流 |
| `context.md` | - | 工作流上下文（动态生成） |

## 内容来源

融合自企业级项目规范：

| 原文件 | 融合到 | 内容 |
|--------|--------|------|
| architecture-patterns.md | structure.md | 分层架构、组件设计模式 |
| component-library.md | structure.md | Ant Design 使用、ECharts、数据可视化 |
| coding-standards.md | tech.md | TypeScript、React、API 命名规范 |
| security-guidelines.md | tech.md | XSS、CSRF、输入验证、数据脱敏 |
| performance-optimization.md | tech.md | memo、useMemo、虚拟滚动、防抖 |
| git-workflow.md | tech.md | 分支策略、提交规范、PR 流程 |
| chinese-language.md | product.md | 中文输出要求 |

## 使用方式

1. **工作流启动时**：复制到项目 `.kiro/steering/`
2. **动态生成**：`context.md` 由工作流服务动态生成
3. **Agent 读取**：所有 Agent 首先读取 `context.md` 获取路径配置

## context.md 内容

```markdown
# 工作流上下文

## 目录配置
| 目录 | 路径 |
|------|------|
| 工作目录 | /path/to/project |
| Spec 目录 | .kiro/specs/{feature} |
| 测试目录 | .kiro/tests/{feature} |
| 日志目录 | .kiro/logs/{feature} |

## 项目信息
- 项目类型: new / existing
- 技术栈: React + TypeScript
- Feature: {feature_name}
```

## 注意事项

- `context.md` 是动态生成的，不要手动修改
- 其他文件可根据项目需求自定义
- 修改后需重新初始化项目才能生效

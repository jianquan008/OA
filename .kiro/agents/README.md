# Agent 配置模板

Kiro CLI Agent 配置模板，定义每个 Agent 的职责、约束和工具权限。

---

## 模板文件

| Agent | JSON 配置 | MD 指令 | 职责 |
|-------|-----------|---------|------|
| requirements-agent | ✅ | ✅ | 需求分析，生成 EARS 格式需求文档，分析 API 依赖 |
| design-agent | ✅ | ✅ | 技术设计，确定 API 策略，设计数据结构 |
| tasks-agent | ✅ | ✅ | 任务分解，包含数据层准备任务 |
| development-agent | ✅ | ✅ | 代码开发，生成 Mock/API 代码 |
| testing-agent | ✅ | ✅ | 端到端测试，验证数据层可用性，执行 E2E 测试 |
| review-agent | ✅ | ✅ | 项目审查，生成总结报告 |
| quick-agent | ✅ | ✅ | 快速开发，单 Agent 完成简单任务 |

---

## API 策略支持

Agent 体系支持三种 API 策略，确保前端可独立运行和测试：

### 策略决策流程

```
requirements-agent: 分析参考文档中的 API 依赖
        ↓
design-agent: 根据以下条件确定策略
  - 有 Swagger/OpenAPI + 后端地址 → 真实 API
  - 有接口文档但无后端地址 → 真实 API + Mock 降级
  - 无任何后端信息 → Mock 数据
        ↓
tasks-agent: 如需 API，添加 Task 0（数据层准备）
        ↓
development-agent: 根据策略生成对应代码
  - Mock 数据: src/mocks/data.ts + src/api/index.ts
  - 真实 API: src/api/client.ts + vite.config.ts 代理
  - 双模式: 两者都生成 + 环境变量切换
        ↓
testing-agent: 验证数据层可用性
  - Mock 数据: 直接测试
  - 真实 API: 检查后端可访问性
  - 双模式: 后端不可用时自动降级
```

### 代码模板

| 策略 | 生成文件 | 说明 |
|------|----------|------|
| Mock 数据 | `src/mocks/data.ts`, `src/api/index.ts` | localStorage 持久化 |
| 真实 API | `src/api/client.ts`, `vite.config.ts` | fetch + 代理配置 |
| 双模式 | 以上全部 + `.env.development` | `VITE_USE_MOCK` 环境变量切换 |

---

## 配置结构

### JSON 配置 (`{agent}.json`)

```json
{
  "name": "agent-name",
  "description": "Agent 描述",
  "prompt": "file://./agent-name.md",
  "tools": ["thinking", "fs_read", "fs_write", ...],
  "allowedTools": ["..."],
  "toolsSettings": {
    "fs_write": {
      "allowedPaths": ["..."],
      "fallback_action": "deny"
    }
  },
  "resources": [
    "file://AGENTS.md",
    "file://.kiro/steering/**/*.md",
    "file://.kiro/templates/**/*.md"
  ]
}
```

### MD 指令 (`{agent}.md`)

```markdown
# Agent Name

## Role
Agent 的角色定义

## Constraints
### MUST - 必须遵守的规则
### MUST NOT - 禁止的行为
### SHOULD - 推荐的做法

## Workflow
执行步骤和流程

## Output
输出格式和位置
```

---

## 使用方式

1. **工作流启动时**：自动复制到项目 `.kiro/agents/` 目录
2. **Kiro CLI 执行**：`kiro -a {agent-name} --no-interactive`
3. **Agent 读取配置**：从 JSON 获取工具权限，从 MD 获取执行指令

---

## 工具权限

| Agent | fs_read | fs_write | execute_bash | code | knowledge |
|-------|---------|----------|--------------|------|-----------|
| requirements | ✅ | specs | ❌ | ✅ | ✅ |
| design | ✅ | specs | ❌ | ✅ | ✅ |
| tasks | ✅ | specs | ❌ | ✅ | ✅ |
| development | ✅ | src/** | ✅ 受限 | ✅ | ✅ |
| testing | ✅ | tests | ✅ 受限 | ✅ | ✅ |
| review | ✅ | logs | ❌ | ✅ | ✅ |
| quick | ✅ | * | ✅ | ✅ | ✅ |
| quick-test | ✅ | tests | ✅ 受限 | ✅ | ✅ |

---

## 资源访问

所有 Agent 可访问：
- `.kiro/steering/**/*.md` - Steering 配置
- `.kiro/templates/**/*.md` - 参考模板
- `.kiro/specs/**/*.md` - Spec 文档
- `.kiro/specs/**/refs/**` - 参考文档

---

## 注意事项

- JSON 和 MD 文件必须成对存在
- 修改后需重新启动工作流才能生效
- 工具权限遵循最小权限原则

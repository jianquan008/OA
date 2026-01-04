# 需求文档

## 功能概述
[一句话描述功能目标]

## 用户故事
作为 [用户角色]，我希望 [功能]，以便 [价值]

## 功能需求

### FR-001: [需求名称]
- **类型**: 功能需求
- **优先级**: P0 / P1 / P2
- **描述**: When [触发条件], the system shall [系统行为]
- **验收标准**:
  - [ ] AC1.1: [具体验收条件]
  - [ ] AC1.2: [具体验收条件]

### FR-002: [需求名称]
- **类型**: 功能需求
- **优先级**: P0 / P1 / P2
- **描述**: When [触发条件], the system shall [系统行为]
- **验收标准**:
  - [ ] AC2.1: [具体验收条件]
  - [ ] AC2.2: [具体验收条件]

## 技术约束
- [约束1]
- [约束2]

## API 依赖

**根据参考文档分析 API 情况：**

| 检查项 | 结果 |
|--------|------|
| 是否有接口文档 | 是 / 否 |
| 接口文档格式 | Swagger / OpenAPI / Markdown / 其他 / 无 |
| 是否有后端地址 | 是 (http://xxx) / 否 |
| 建议 API 策略 | Mock 数据 / 真实 API / 真实 API + Mock 降级 |

**接口清单（如有）：**
| 接口 | 方法 | 描述 | 来源文档 |
|------|------|------|----------|
| /api/xxx | GET | [描述] | [文档名] |

## 非功能需求
- 性能：[要求]
- 兼容性：[要求]
- 可访问性：[要求]

## 范围外
- [不在范围内的功能1]
- [不在范围内的功能2]

## EARS 格式参考

| 模式 | 模板 | 示例 |
|------|------|------|
| 普遍性 | The [system] shall [action] | The system shall display error messages in red |
| 事件驱动 | When [trigger], the [system] shall [action] | When user clicks Submit, the system shall validate the form |
| 状态驱动 | While [state], the [system] shall [action] | While loading, the system shall display a spinner |
| 可选 | Where [feature], the [system] shall [action] | Where dark mode is enabled, the system shall use dark theme |
| 异常 | If [condition], then the [system] shall [action] | If session expires, then the system shall redirect to login |

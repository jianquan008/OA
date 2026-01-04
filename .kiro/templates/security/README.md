# 安全规范模板

前端安全检查清单，供 review-agent 审查代码时参考。

## 模板文件

| 文件 | 用途 | 使用者 |
|------|------|--------|
| `frontend-security-checklist.md` | 前端安全检查清单 | review-agent |

## 与 Steering 的关系

详细的安全规范已融合到 `steering/tech.md`（520 行），包括：
- XSS 防护
- CSRF 防护
- 输入验证
- 数据脱敏
- 依赖安全（pnpm audit）

本目录的检查清单用于 review-agent 快速审查。

## 安全检查项

### XSS 防护
- 输出编码（避免 `dangerouslySetInnerHTML`、`v-html`）
- 用户输入处理（转义、验证）
- DOM 操作安全（避免 `innerHTML`）

### CSRF 防护
- Token 验证
- Origin/Referer 检查
- 敏感操作二次确认

### 敏感数据处理
- 存储安全（避免 localStorage 存 Token）
- 传输安全（HTTPS）
- 日志安全（不输出敏感信息）

### 第三方依赖
- `pnpm audit` 检查
- SRI（Subresource Integrity）
- 依赖版本检查

## 严重程度分类

| 等级 | 标识 | 示例 |
|------|------|------|
| 高 | 🔴 | XSS、敏感数据泄露 |
| 中 | 🟡 | 未配置 CSP、localStorage 存 Token |
| 低 | 🟢 | 代码规范问题 |

## 注意事项

- review-agent 必须在 summary.md 中包含安全审查部分
- 发现高危问题必须明确标注并提供修复建议

# 工作流上下文

**重要：所有 Agent 必须使用以下路径，不要自行决定输出位置。**

## 目录配置

| 目录 | 路径 | 用途 |
|------|------|------|
| 工作目录 | `/Users/kb/devgenie-data/organizations/default_org/projects/AI-OA/generated/admin` | 项目根目录 |
| Spec目录 | `/Users/kb/devgenie-data/organizations/default_org/projects/AI-OA/generated/admin/.kiro/specs/根据参考文档实现功能` | requirements.md, design.md, tasks.md |
| 参考文档 | `/Users/kb/devgenie-data/organizations/default_org/projects/AI-OA/generated/admin/.kiro/specs/根据参考文档实现功能/refs` | 用户上传的参考文档（UI设计图、PRD等） |
| 测试目录 | `/Users/kb/devgenie-data/organizations/default_org/projects/AI-OA/generated/admin/.kiro/tests/根据参考文档实现功能` | test-cases.md, test-report.md |
| 日志目录 | `/Users/kb/devgenie-data/organizations/default_org/projects/AI-OA/generated/admin/.kiro/logs/根据参考文档实现功能` | workflow.log, summary.md |

## 当前 Feature

- **Feature 名称**: 根据参考文档实现功能
- **项目类型**: new
- **工作流模式**: full
- **执行模式**: auto

**注意**：参考文档在当前 Feature 的 refs 目录下，不要读取其他 Feature 的文档。

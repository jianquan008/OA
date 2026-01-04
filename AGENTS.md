# AGENTS.md

本项目由 DevGenie 智能开发平台生成和管理。

## 核心原则

1. **先读取配置**：执行任何操作前，先读取 `.kiro/steering/context.md` 获取路径配置
2. **聚焦当前任务**：只完成当前阶段的职责，不要越界
3. **验证产出物**：写入文件后验证文件存在
4. **遵循现有风格**：修改代码时保持与现有代码风格一致

## 路径配置

所有路径信息在 `.kiro/steering/context.md` 中定义：
- `WORKING_DIR`: 项目根目录
- `SPEC_DIR`: 规划文档目录（requirements.md, design.md, tasks.md）
- `TEST_DIR`: 测试产出物目录（test-cases.md, test-report.md）
- `LOGS_DIR`: 日志目录

## 产出物规范

| 阶段 | 产出物 | 位置 |
|------|--------|------|
| 需求分析 | requirements.md | SPEC_DIR |
| 技术设计 | design.md | SPEC_DIR |
| 任务分解 | tasks.md | SPEC_DIR |
| 代码开发 | 源代码文件 | WORKING_DIR |
| 测试验证 | test-report.md | TEST_DIR |
| 审查总结 | summary.md | LOGS_DIR |

## 禁止事项

- ❌ 不要执行阻塞命令（pnpm run dev, pnpm start, npm run dev）
- ❌ 不要在代码中硬编码密钥或敏感信息
- ❌ 不要修改 `.kiro/steering/` 下的文件
- ❌ 不要停止 8000 端口（DevGenie 服务）
- ❌ 不要删除现有的测试文件或配置文件

## 技术栈参考

详细技术栈和代码规范请参考：
- `.kiro/steering/tech.md` - 技术栈和代码规范
- `.kiro/steering/product.md` - 产品背景
- `.kiro/steering/structure.md` - 项目结构（如存在）

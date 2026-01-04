# UI 设计系统

企业级 UI 设计规范，Ant Design 风格。

## 文件

| 文件 | 行数 | 内容 |
|------|------|------|
| `default-design-system.md` | 1439 | 完整设计系统（颜色、间距、组件、布局） |

## 设计系统内容

### 颜色体系
- 主色：Daybreak Blue (#1677ff)
- 语义色：成功、警告、错误、信息
- 中性色：文本、边框、背景

### 组件规范
- 基础组件：Button、Input、Select、Checkbox、Radio
- 表单系统：Form、FormItem、验证状态
- 数据展示：Table、Card、Badge、Avatar、Empty
- 反馈组件：Modal、Toast、Loading、Progress
- 导航组件：Tabs、Dropdown、Menu

### 布局系统
- 栅格系统：12 列
- 间距规范：4px 基准
- 响应式断点

## 使用方式

Agent 通过 `@ui-standards/default-design-system.md` 引用。

## 注意事项

- 只保留亮色模式，无暗色模式
- 使用通用设计原则，不强调 Ant Design 品牌
- 组件样式与 Ant Design 5.x 保持一致

# 默认设计系统

**企业级 UI 设计规范，确保界面美观、专业、一致。**

---

## 1. 颜色系统

### 品牌色
```css
:root {
    /* 主色 - 拂晓蓝（Daybreak Blue） */
    --primary-1: #e6f4ff;
    --primary-2: #bae0ff;
    --primary-3: #91caff;
    --primary-4: #69b1ff;
    --primary-5: #4096ff;
    --primary-6: #1677ff;  /* 主色 */
    --primary-7: #0958d9;
    --primary-8: #003eb3;
    --primary-9: #002c8c;
    --primary-10: #001d66;
    
    /* 成功色 - 极光绿（Polar Green） */
    --success-1: #f6ffed;
    --success-2: #d9f7be;
    --success-3: #b7eb8f;
    --success-4: #95de64;
    --success-5: #73d13d;
    --success-6: #52c41a;  /* 主色 */
    --success-7: #389e0d;
    
    /* 警告色 - 日暮黄（Sunset Orange） */
    --warning-1: #fffbe6;
    --warning-2: #fff1b8;
    --warning-3: #ffe58f;
    --warning-4: #ffd666;
    --warning-5: #ffc53d;
    --warning-6: #faad14;  /* 主色 */
    --warning-7: #d48806;
    
    /* 错误色 - 薄暮红（Dust Red） */
    --error-1: #fff1f0;
    --error-2: #ffccc7;
    --error-3: #ffa39e;
    --error-4: #ff7875;
    --error-5: #ff4d4f;
    --error-6: #f5222d;  /* 主色 */
    --error-7: #cf1322;
    
    /* 中性色（Neutral Color） */
    --gray-1: #ffffff;
    --gray-2: #fafafa;
    --gray-3: #f5f5f5;
    --gray-4: #f0f0f0;
    --gray-5: #d9d9d9;
    --gray-6: #bfbfbf;
    --gray-7: #8c8c8c;
    --gray-8: #595959;
    --gray-9: #434343;
    --gray-10: #262626;
    --gray-11: #1f1f1f;
    --gray-12: #141414;
    --gray-13: #000000;
}
```

### 语义化颜色
```css
:root {
    /* 背景 */
    --bg-base: #ffffff;
    --bg-layout: #f5f5f5;
    --bg-container: #ffffff;
    --bg-elevated: #ffffff;
    --bg-spotlight: rgba(0, 0, 0, 0.85);
    
    /* 文字 */
    --text-primary: rgba(0, 0, 0, 0.88);
    --text-secondary: rgba(0, 0, 0, 0.65);
    --text-tertiary: rgba(0, 0, 0, 0.45);
    --text-quaternary: rgba(0, 0, 0, 0.25);
    --text-inverse: #ffffff;
    --text-link: var(--primary-6);
    --text-link-hover: var(--primary-5);
    
    /* 边框 */
    --border-default: #d9d9d9;
    --border-secondary: #f0f0f0;
    --border-focus: var(--primary-6);
    
    /* 阴影（Ant Design 标准） */
    --shadow-1: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
                0 1px 6px -1px rgba(0, 0, 0, 0.02),
                0 2px 4px 0 rgba(0, 0, 0, 0.02);
    --shadow-2: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
                0 6px 16px 0 rgba(0, 0, 0, 0.08),
                0 9px 28px 8px rgba(0, 0, 0, 0.05);
    --shadow-3: 0 6px 16px -8px rgba(0, 0, 0, 0.08),
                0 9px 28px 0 rgba(0, 0, 0, 0.05),
                0 12px 48px 16px rgba(0, 0, 0, 0.03);
}
```

---

## 2. 间距系统

```css
:root {
    /* Ant Design 标准间距 */
    --spacing-xxs: 4px;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 48px;
    
    /* 组件内边距 */
    --padding-xs: 8px;
    --padding-sm: 12px;
    --padding-md: 16px;
    --padding-lg: 24px;
    
    /* 组件外边距 */
    --margin-xs: 8px;
    --margin-sm: 12px;
    --margin-md: 16px;
    --margin-lg: 24px;
}
```

---

## 3. 字体系统

```css
:root {
    /* Ant Design 字体族 */
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                   'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                   'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-family-code: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    
    /* 字号 */
    --font-size-sm: 12px;
    --font-size-base: 14px;
    --font-size-lg: 16px;
    --font-size-xl: 20px;
    
    /* 标题字号 */
    --font-size-h1: 38px;
    --font-size-h2: 30px;
    --font-size-h3: 24px;
    --font-size-h4: 20px;
    --font-size-h5: 16px;
    
    /* 行高 */
    --line-height-base: 1.5714;
    --line-height-lg: 1.5;
    --line-height-sm: 1.6667;
    
    /* 字重 */
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
}
```

---

## 4. 圆角与动效

```css
:root {
    /* Ant Design 圆角 */
    --radius-xs: 2px;
    --radius-sm: 4px;
    --radius-base: 6px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    --radius-full: 9999px;
    
    /* 动效时长 */
    --duration-fast: 0.1s;
    --duration-base: 0.2s;
    --duration-slow: 0.3s;
    
    /* 缓动函数 */
    --ease-base: cubic-bezier(0.645, 0.045, 0.355, 1);
    --ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
    --ease-in: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
}
```

---

## 5. 组件规范

### 5.1 按钮

```css
/* 基础按钮 */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5714;
    border-radius: var(--radius-base);
    cursor: pointer;
    transition: all var(--duration-base) var(--ease-base);
    outline: none;
    border: 1px solid transparent;
    white-space: nowrap;
}

/* 主按钮 */
.btn-primary {
    color: #fff;
    background: var(--primary-6);
    border-color: var(--primary-6);
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
}
.btn-primary:hover {
    background: var(--primary-5);
    border-color: var(--primary-5);
}
.btn-primary:active {
    background: var(--primary-7);
    border-color: var(--primary-7);
}

/* 默认按钮 */
.btn-default {
    color: var(--text-primary);
    background: #fff;
    border-color: var(--border-default);
}
.btn-default:hover {
    color: var(--primary-5);
    border-color: var(--primary-5);
}

/* 虚线按钮 */
.btn-dashed {
    color: var(--text-primary);
    background: #fff;
    border-color: var(--border-default);
    border-style: dashed;
}
.btn-dashed:hover {
    color: var(--primary-5);
    border-color: var(--primary-5);
}

/* 文本按钮 */
.btn-text {
    color: var(--text-primary);
    background: transparent;
    border: none;
    box-shadow: none;
}
.btn-text:hover {
    background: rgba(0, 0, 0, 0.06);
}

/* 链接按钮 */
.btn-link {
    color: var(--primary-6);
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
    height: auto;
}
.btn-link:hover {
    color: var(--primary-5);
}

/* 危险按钮 */
.btn-danger {
    color: #fff;
    background: var(--error-6);
    border-color: var(--error-6);
}
.btn-danger:hover {
    background: var(--error-5);
    border-color: var(--error-5);
}

/* 按钮尺寸 */
.btn-sm { height: 24px; padding: 0 7px; font-size: 12px; border-radius: var(--radius-sm); }
.btn-lg { height: 40px; padding: 6px 15px; font-size: 16px; border-radius: var(--radius-lg); }

/* 禁用状态 */
.btn:disabled {
    color: var(--text-quaternary);
    background: rgba(0, 0, 0, 0.04);
    border-color: var(--border-default);
    cursor: not-allowed;
    box-shadow: none;
}

/* 加载状态 */
.btn-loading {
    opacity: 0.65;
    pointer-events: none;
}
.btn-loading::before {
    content: '';
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 8px;
}
@keyframes spin {
    to { transform: rotate(360deg); }
}
```

### 5.2 输入框

```css
.input {
    width: 100%;
    height: 32px;
    padding: 4px 11px;
    font-size: 14px;
    color: var(--text-primary);
    background: #fff;
    border: 1px solid var(--border-default);
    border-radius: var(--radius-base);
    outline: none;
    transition: all var(--duration-base) var(--ease-base);
}
.input::placeholder {
    color: var(--text-quaternary);
}
.input:hover {
    border-color: var(--primary-5);
}
.input:focus {
    border-color: var(--primary-6);
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
}

/* 输入框尺寸 */
.input-sm { height: 24px; padding: 0 7px; font-size: 12px; }
.input-lg { height: 40px; padding: 6px 11px; font-size: 16px; }

/* 错误状态 */
.input-error {
    border-color: var(--error-6);
}
.input-error:focus {
    box-shadow: 0 0 0 2px rgba(255, 38, 5, 0.06);
}

/* 禁用状态 */
.input:disabled {
    color: var(--text-quaternary);
    background: rgba(0, 0, 0, 0.04);
    cursor: not-allowed;
}

/* 带前后缀 */
.input-group {
    display: inline-flex;
    width: 100%;
}
.input-addon {
    display: flex;
    align-items: center;
    padding: 0 11px;
    color: var(--text-primary);
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid var(--border-default);
}
.input-addon:first-child {
    border-right: 0;
    border-radius: var(--radius-base) 0 0 var(--radius-base);
}
.input-addon:last-child {
    border-left: 0;
    border-radius: 0 var(--radius-base) var(--radius-base) 0;
}
.input-group .input {
    border-radius: 0;
}
.input-group .input:first-child {
    border-radius: var(--radius-base) 0 0 var(--radius-base);
}
.input-group .input:last-child {
    border-radius: 0 var(--radius-base) var(--radius-base) 0;
}

/* 搜索框 */
.input-search {
    padding-left: 32px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23bfbfbf' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 11px center;
}

/* 文本域 */
.textarea {
    min-height: 80px;
    padding: 4px 11px;
    resize: vertical;
}
```

### 5.3 选择器

```css
.select {
    width: 100%;
    height: 32px;
    padding: 4px 32px 4px 11px;
    font-size: 14px;
    color: var(--text-primary);
    background: #fff;
    border: 1px solid var(--border-default);
    border-radius: var(--radius-base);
    outline: none;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23bfbfbf' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 11px center;
    transition: all var(--duration-base) var(--ease-base);
}
.select:hover {
    border-color: var(--primary-5);
}
.select:focus {
    border-color: var(--primary-6);
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
}
```

### 5.4 卡片

```css
.card {
    background: #fff;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-secondary);
    box-shadow: var(--shadow-1);
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-bottom: 1px solid var(--border-secondary);
}

.card-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
}

.card-body {
    padding: 24px;
}

.card-footer {
    padding: 12px 24px;
    border-top: 1px solid var(--border-secondary);
    background: var(--gray-2);
}

/* 可悬浮卡片 */
.card-hoverable {
    cursor: pointer;
    transition: box-shadow var(--duration-base) var(--ease-base);
}
.card-hoverable:hover {
    box-shadow: var(--shadow-2);
}
```

### 5.5 表单

```css
.form-item {
    margin-bottom: 24px;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: var(--text-primary);
}

.form-label-required::before {
    content: '*';
    color: var(--error-6);
    margin-right: 4px;
}

.form-help {
    margin-top: 4px;
    font-size: 12px;
    color: var(--text-tertiary);
}

.form-error {
    margin-top: 4px;
    font-size: 12px;
    color: var(--error-6);
}

/* 复选框 */
.checkbox {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    color: var(--text-primary);
}
.checkbox input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: var(--primary-6);
}

/* 单选框 */
.radio {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    color: var(--text-primary);
}
.radio input[type="radio"] {
    width: 16px;
    height: 16px;
    accent-color: var(--primary-6);
}

/* 开关 */
.switch {
    position: relative;
    width: 44px;
    height: 22px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    cursor: pointer;
    transition: background var(--duration-base);
}
.switch::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    transition: transform var(--duration-base);
}
.switch[data-checked="true"] {
    background: var(--primary-6);
}
.switch[data-checked="true"]::after {
    transform: translateX(22px);
}
```

---

## 6. 高级组件

### 6.1 模态框

```css
.modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1000;
}

.modal-wrap {
    position: fixed;
    inset: 0;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal {
    width: 520px;
    max-width: calc(100vw - 32px);
    background: #fff;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-3);
    animation: modalIn var(--duration-slow) var(--ease-out);
}

.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-bottom: 1px solid var(--border-secondary);
}

.modal-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
}

.modal-close {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-tertiary);
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: all var(--duration-fast);
}
.modal-close:hover {
    color: var(--text-secondary);
    background: rgba(0, 0, 0, 0.06);
}

.modal-body {
    padding: 24px;
    font-size: 14px;
    color: var(--text-primary);
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 10px 16px;
    border-top: 1px solid var(--border-secondary);
}

@keyframes modalIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}
```

### 6.2 消息提示

```css
.message-container {
    position: fixed;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1010;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.message {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    background: #fff;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-2);
    font-size: 14px;
    color: var(--text-primary);
    animation: messageIn var(--duration-base) var(--ease-out);
}

.message-icon {
    width: 16px;
    height: 16px;
}
.message-success .message-icon { color: var(--success-6); }
.message-error .message-icon { color: var(--error-6); }
.message-warning .message-icon { color: var(--warning-6); }
.message-info .message-icon { color: var(--primary-6); }

@keyframes messageIn {
    from { opacity: 0; transform: translateY(-100%); }
    to { opacity: 1; transform: translateY(0); }
}
```

### 6.3 下拉菜单

```css
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    min-width: 120px;
    background: #fff;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-2);
    padding: 4px;
    z-index: 1050;
    animation: dropdownIn var(--duration-base) var(--ease-out);
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 12px;
    font-size: 14px;
    color: var(--text-primary);
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: background var(--duration-fast);
}
.dropdown-item:hover {
    background: rgba(0, 0, 0, 0.04);
}
.dropdown-item-danger {
    color: var(--error-6);
}
.dropdown-item-danger:hover {
    background: var(--error-1);
}

.dropdown-divider {
    height: 1px;
    background: var(--border-secondary);
    margin: 4px 0;
}

@keyframes dropdownIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### 6.4 标签页

```css
.tabs {
    display: flex;
    flex-direction: column;
}

.tabs-nav {
    display: flex;
    border-bottom: 1px solid var(--border-secondary);
}

.tabs-tab {
    padding: 12px 16px;
    font-size: 14px;
    color: var(--text-primary);
    background: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    transition: color var(--duration-base);
}
.tabs-tab:hover {
    color: var(--primary-6);
}
.tabs-tab-active {
    color: var(--primary-6);
}
.tabs-tab-active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary-6);
}

.tabs-content {
    padding: 16px 0;
}
```

### 6.5 标签

```css
.tag {
    display: inline-flex;
    align-items: center;
    height: 22px;
    padding: 0 7px;
    font-size: 12px;
    border-radius: var(--radius-sm);
    border: 1px solid;
}

.tag-default {
    color: var(--text-secondary);
    background: var(--gray-2);
    border-color: var(--border-default);
}
.tag-primary {
    color: var(--primary-6);
    background: var(--primary-1);
    border-color: var(--primary-3);
}
.tag-success {
    color: var(--success-6);
    background: var(--success-1);
    border-color: var(--success-3);
}
.tag-warning {
    color: var(--warning-6);
    background: var(--warning-1);
    border-color: var(--warning-3);
}
.tag-error {
    color: var(--error-6);
    background: var(--error-1);
    border-color: var(--error-3);
}
```

### 6.6 头像

```css
.avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--gray-5);
    color: #fff;
    font-size: 14px;
    overflow: hidden;
}
.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.avatar-sm { width: 24px; height: 24px; font-size: 12px; }
.avatar-lg { width: 40px; height: 40px; font-size: 18px; }
.avatar-xl { width: 64px; height: 64px; font-size: 28px; }

.avatar-square { border-radius: var(--radius-base); }

/* 头像组 */
.avatar-group {
    display: inline-flex;
}
.avatar-group .avatar {
    border: 2px solid #fff;
    margin-left: -8px;
}
.avatar-group .avatar:first-child {
    margin-left: 0;
}
```

---

## 7. 数据展示

### 7.1 表格

```css
.table-container {
    overflow-x: auto;
}

.table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
}

.table th {
    padding: 16px;
    text-align: left;
    font-weight: 600;
    color: var(--text-primary);
    background: var(--gray-2);
    border-bottom: 1px solid var(--border-secondary);
}

.table td {
    padding: 16px;
    color: var(--text-primary);
    border-bottom: 1px solid var(--border-secondary);
}

.table tbody tr:hover {
    background: var(--gray-2);
}

/* 紧凑表格 */
.table-compact th,
.table-compact td {
    padding: 8px 16px;
}

/* 带边框表格 */
.table-bordered {
    border: 1px solid var(--border-secondary);
}
.table-bordered th,
.table-bordered td {
    border: 1px solid var(--border-secondary);
}
```

### 7.2 空状态

```css
.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
}

.empty-image {
    width: 64px;
    height: 64px;
    margin-bottom: 8px;
    color: var(--text-quaternary);
}

.empty-description {
    font-size: 14px;
    color: var(--text-tertiary);
}
```

### 7.3 加载

```css
.spin {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-6);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.spin-sm { width: 14px; height: 14px; }
.spin-lg { width: 32px; height: 32px; border-width: 3px; }

/* 骨架屏 */
.skeleton {
    background: linear-gradient(90deg, var(--gray-3) 25%, var(--gray-2) 50%, var(--gray-3) 75%);
    background-size: 200% 100%;
    animation: skeleton 1.5s ease infinite;
    border-radius: var(--radius-sm);
}

.skeleton-text { height: 16px; margin-bottom: 12px; }
.skeleton-title { height: 24px; width: 40%; margin-bottom: 16px; }
.skeleton-avatar { width: 32px; height: 32px; border-radius: 50%; }
.skeleton-button { height: 32px; width: 80px; }
.skeleton-image { height: 200px; }

@keyframes skeleton {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
```

### 7.4 进度条

```css
.progress {
    height: 8px;
    background: var(--gray-3);
    border-radius: 100px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: var(--primary-6);
    border-radius: 100px;
    transition: width var(--duration-slow) var(--ease-out);
}

.progress-success .progress-bar { background: var(--success-6); }
.progress-error .progress-bar { background: var(--error-6); }

/* 小尺寸 */
.progress-sm { height: 6px; }
```

### 7.5 统计数值

```css
.statistic {
    display: flex;
    flex-direction: column;
}

.statistic-title {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 4px;
}

.statistic-value {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary);
}

.statistic-prefix,
.statistic-suffix {
    font-size: 16px;
    margin: 0 4px;
}
```

---

## 8. 布局系统

### 8.1 全局样式重置

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
    font-family: var(--font-family);
    font-size: 14px;
    color: var(--text-primary);
    background: var(--bg-layout);
    -webkit-font-smoothing: antialiased;
}

#root, #app {
    height: 100%;
}
```

### 8.2 页面布局模式（Ant Design Pro 风格）

#### 居中布局（登录、注册、单页应用）
```css
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background: var(--bg-layout);
}

.content {
    flex: 1;
    padding: 32px 0;
}

/* 内容居中 */
.main {
    width: 328px;
    margin: 0 auto;
}
```

#### 后台管理布局
```css
.layout-admin {
    display: flex;
    height: 100vh;
}

.layout-sider {
    width: 200px;
    background: #001529;
    flex-shrink: 0;
}

.layout-main {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.layout-header {
    height: 64px;
    background: #fff;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--shadow-1);
}

.layout-content {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
}

.layout-footer {
    padding: 24px;
    text-align: center;
    color: var(--text-tertiary);
    background: var(--bg-layout);
}
```

#### 全宽布局（列表、表格页）
```css
.layout-full {
    min-height: 100vh;
    padding: 24px;
    background: var(--bg-layout);
}

.page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
}

.page-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
}

.page-content {
    background: #fff;
    border-radius: var(--radius-lg);
    padding: 24px;
}
```

### 8.3 响应式断点

```css
/* 移动端优先 */
/* xs: < 576px */
/* sm: >= 576px */
/* md: >= 768px */
/* lg: >= 992px */
/* xl: >= 1200px */
/* xxl: >= 1600px */

@media (min-width: 576px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 992px) { /* lg */ }
@media (min-width: 1200px) { /* xl */ }
@media (min-width: 1600px) { /* xxl */ }
```

### 8.4 栅格系统

```css
.row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
}

.col {
    padding: 0 8px;
}

/* 24 栅格 */
.col-24 { width: 100%; }
.col-12 { width: 50%; }
.col-8 { width: 33.333%; }
.col-6 { width: 25%; }
.col-4 { width: 16.667%; }

/* 响应式 */
@media (max-width: 768px) {
    .col-md-24 { width: 100%; }
    .col-md-12 { width: 50%; }
}
```

---

## 9. 布局检查清单

开发完成后，确保以下要求：

- [ ] 根容器设置 `min-height: 100vh`
- [ ] 全局样式重置（margin、padding、box-sizing）
- [ ] 主要内容区域正确布局（居中/侧边栏/全宽）
- [ ] 响应式适配（至少支持手机和桌面）
- [ ] 内容区域有合适的 padding（通常 24px）
- [ ] 卡片/表格有正确的圆角和阴影

---

## 10. 完整示例

### 登录页

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录</title>
    <style>
        :root {
            --primary-6: #1677ff;
            --primary-5: #4096ff;
            --text-primary: rgba(0, 0, 0, 0.88);
            --text-secondary: rgba(0, 0, 0, 0.65);
            --text-quaternary: rgba(0, 0, 0, 0.25);
            --border-default: #d9d9d9;
            --radius-base: 6px;
            --radius-lg: 8px;
            --shadow-2: 0 3px 6px -4px rgba(0,0,0,0.12), 0 6px 16px 0 rgba(0,0,0,0.08), 0 9px 28px 8px rgba(0,0,0,0.05);
        }
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
        }
        
        .login-card {
            width: 100%;
            max-width: 400px;
            background: #fff;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-2);
            padding: 40px;
        }
        
        .login-header {
            text-align: center;
            margin-bottom: 32px;
        }
        
        .login-logo {
            font-size: 32px;
            margin-bottom: 8px;
        }
        
        .login-title {
            font-size: 24px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
        }
        
        .login-subtitle {
            font-size: 14px;
            color: var(--text-secondary);
        }
        
        .form-item {
            margin-bottom: 24px;
        }
        
        .form-label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--text-primary);
        }
        
        .input {
            width: 100%;
            height: 40px;
            padding: 4px 11px;
            font-size: 14px;
            border: 1px solid var(--border-default);
            border-radius: var(--radius-base);
            outline: none;
            transition: all 0.2s;
        }
        
        .input:focus {
            border-color: var(--primary-6);
            box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
        }
        
        .form-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }
        
        .checkbox-label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--text-primary);
            cursor: pointer;
        }
        
        .link {
            color: var(--primary-6);
            text-decoration: none;
            font-size: 14px;
        }
        .link:hover {
            color: var(--primary-5);
        }
        
        .btn-primary {
            width: 100%;
            height: 40px;
            font-size: 14px;
            color: #fff;
            background: var(--primary-6);
            border: none;
            border-radius: var(--radius-base);
            cursor: pointer;
            transition: background 0.2s;
        }
        
        .btn-primary:hover {
            background: var(--primary-5);
        }
        
        .login-footer {
            text-align: center;
            margin-top: 24px;
            font-size: 14px;
            color: var(--text-secondary);
        }
    </style>
</head>
<body>
    <div class="login-card">
        <div class="login-header">
            <div class="login-logo">🚀</div>
            <h1 class="login-title">欢迎登录</h1>
            <p class="login-subtitle">企业管理平台</p>
        </div>
        
        <form>
            <div class="form-item">
                <label class="form-label">用户名</label>
                <input type="text" class="input" placeholder="请输入用户名">
            </div>
            
            <div class="form-item">
                <label class="form-label">密码</label>
                <input type="password" class="input" placeholder="请输入密码">
            </div>
            
            <div class="form-options">
                <label class="checkbox-label">
                    <input type="checkbox">
                    <span>记住我</span>
                </label>
                <a href="#" class="link">忘记密码？</a>
            </div>
            
            <button type="submit" class="btn-primary">登录</button>
        </form>
        
        <div class="login-footer">
            还没有账号？<a href="#" class="link">立即注册</a>
        </div>
    </div>
</body>
</html>
```

---

## 11. 设计原则

1. **自然** - 界面设计应符合用户直觉，减少学习成本
2. **确定** - 设计决策有据可循，减少不确定性
3. **意义** - 每个设计元素都有其存在的意义
4. **生长** - 设计系统应能适应业务的持续发展

### 核心价值观

- **微小** - 关注细节，追求极致
- **确定** - 设计决策有据可循
- **幸福** - 让用户感到愉悦
- **自然** - 符合用户直觉

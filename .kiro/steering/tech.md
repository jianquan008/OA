# 技术规范

## 技术栈

- **框架**: React 18 + TypeScript
- **UI 组件**: Ant Design 5.x
- **状态管理**: React Hooks (useState, useReducer, useContext)
- **数据请求**: ahooks useRequest / fetch
- **构建工具**: Vite
- **包管理器**: pnpm (推荐)

---

## 代码规范

### TypeScript 规范

#### 类型定义
```typescript
// 接口定义
interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

// 类型别名
type UserId = string;

// 枚举
enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

// Props 类型
interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (id: string) => void;
}
```

#### 类型导入
```typescript
// 使用 type 关键字导入类型
import type { User, UserRole } from '@/types/user.type';
```

### React 组件规范

#### 函数组件
```typescript
// 使用函数声明，不使用箭头函数定义组件
function UserProfile({ userId }: { userId: string }) {
  // 1. Hooks 放在组件顶部
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  // 2. 副作用
  useEffect(() => {
    fetchUser();
  }, [userId]);
  
  // 3. 事件处理函数使用 handle 前缀
  const handleSubmit = () => {
    // ...
  };
  
  // 4. 渲染
  return <div>{user?.name}</div>;
}

// 使用具名导出
export { UserProfile };
```

#### Props 解构
```typescript
// 在参数中解构 props
function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div>
      <span>{user.name}</span>
      <Button onClick={() => onEdit?.(user)}>编辑</Button>
    </div>
  );
}
```

### API 服务规范

#### 命名规范
```typescript
// 查询单个：get + 资源名
export async function getUser(id: string): Promise<User> {
  return request(`/api/users/${id}`);
}

// 查询列表：get + 资源名 + List
export async function getUserList(params: QueryParams): Promise<User[]> {
  return request('/api/users', { params });
}

// 创建：create + 资源名
export async function createUser(data: CreateUserDto): Promise<User> {
  return request('/api/users', { method: 'POST', data });
}

// 更新：update + 资源名
export async function updateUser(id: string, data: UpdateUserDto): Promise<User> {
  return request(`/api/users/${id}`, { method: 'PUT', data });
}

// 删除：delete + 资源名
export async function deleteUser(id: string): Promise<void> {
  return request(`/api/users/${id}`, { method: 'DELETE' });
}
```

### 样式规范

#### CSS 命名（BEM）
```css
/* 块 */
.user-card { }

/* 元素 */
.user-card__header { }
.user-card__content { }
.user-card__footer { }

/* 修饰符 */
.user-card--active { }
.user-card--disabled { }
```

#### CSS Modules
```typescript
import styles from './UserCard.module.css';

<div className={styles['user-card']}>
  <div className={styles['user-card__header']}>{user.name}</div>
</div>
```

---

## 安全规范

### 敏感信息处理

#### 不要硬编码敏感信息
```typescript
// ❌ 错误
const API_KEY = 'sk-1234567890';

// ✅ 正确
const API_KEY = import.meta.env.VITE_API_KEY;
```

#### 数据脱敏显示
```typescript
// 手机号脱敏
function maskPhone(phone: string): string {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

// 身份证脱敏
function maskIdCard(idCard: string): string {
  return idCard.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
}

// 邮箱脱敏
function maskEmail(email: string): string {
  return email.replace(/(.{2}).*(@.*)/, '$1***$2');
}
```

### XSS 防护

```typescript
// ❌ 危险：可能导致 XSS
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ 安全：React 自动转义
<div>{userInput}</div>

// ✅ 如必须使用 HTML，先清理
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
```

### 输入验证

```typescript
// 表单验证规则
<Form.Item
  name="email"
  rules={[
    { required: true, message: '请输入邮箱' },
    { type: 'email', message: '请输入有效的邮箱地址' },
  ]}
>
  <Input />
</Form.Item>

<Form.Item
  name="phone"
  rules={[
    { required: true, message: '请输入手机号' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号' },
  ]}
>
  <Input />
</Form.Item>
```

### 安全检查清单

- [ ] 敏感数据是否脱敏显示
- [ ] 用户输入是否进行了验证
- [ ] 是否避免了 XSS 漏洞
- [ ] API 请求是否使用 HTTPS
- [ ] 错误信息是否安全（不暴露敏感信息）

### CSRF 防护

- 所有状态修改请求使用 POST/PUT/DELETE
- 请求携带 CSRF Token
- 敏感操作使用二次确认

### 依赖安全

```bash
# 检查安全漏洞
pnpm audit

# 自动修复
pnpm audit --fix
```

- 定期更新依赖
- 不使用已知有漏洞的依赖版本
- 使用 lock 文件锁定依赖版本

---

## 性能优化

### 渲染优化

#### React.memo
```typescript
// 对于纯展示组件，使用 memo 避免不必要的重渲染
const UserCard = memo(({ user }: { user: User }) => {
  return <div>{user.name}</div>;
});
```

#### useMemo
```typescript
// 缓存计算结果
const sortedUsers = useMemo(() => {
  return users.sort((a, b) => a.name.localeCompare(b.name));
}, [users]);
```

#### useCallback
```typescript
// 缓存函数引用
const handleClick = useCallback((id: string) => {
  onUserClick(id);
}, [onUserClick]);
```

### 列表优化

#### 虚拟滚动
```typescript
import { Virtuoso } from 'react-virtuoso';

function LongList({ data }: { data: Item[] }) {
  return (
    <Virtuoso
      style={{ height: 600 }}
      data={data}
      itemContent={(index, item) => <ItemCard item={item} />}
    />
  );
}
```

#### 分页加载
```typescript
<Table
  dataSource={data}
  pagination={{
    current: page,
    pageSize: 10,
    total: total,
    onChange: setPage,
  }}
/>
```

### 请求优化

#### 防抖搜索
```typescript
import { useDebounceFn } from 'ahooks';

function SearchInput({ onSearch }: { onSearch: (value: string) => void }) {
  const { run } = useDebounceFn(onSearch, { wait: 500 });
  
  return <Input onChange={(e) => run(e.target.value)} />;
}
```

#### 请求缓存
```typescript
const { data } = useRequest(getUserInfo, {
  cacheKey: `user-${userId}`,
  staleTime: 5 * 60 * 1000, // 5分钟缓存
});
```

### 代码分割

#### 组件懒加载
```typescript
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyPage() {
  return (
    <Suspense fallback={<Spin />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### 图片优化

- 图标使用 SVG
- 照片使用 WebP（降级到 JPG）
- 使用懒加载：`<img loading="lazy" />`
- 指定图片尺寸避免布局抖动

### 打包优化

#### Tree Shaking
```typescript
// ✅ 支持 Tree Shaking
import { Button } from 'antd';

// ❌ 不支持 Tree Shaking
import antd from 'antd';
const { Button } = antd;
```

#### 分析打包体积
```bash
pnpm run analyze
```

---

## 错误处理

### API 错误处理
```typescript
// 使用 try-catch
try {
  const data = await getUserInfo(userId);
  setUser(data);
} catch (error) {
  message.error('获取用户信息失败');
  console.error('getUserInfo error:', error);
}

// 使用 useRequest
const { data, error } = useRequest(getUserInfo, {
  onError: () => {
    message.error('获取用户信息失败');
  },
});
```

### 错误边界
```typescript
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return <div>出错了：{error.message}</div>;
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <MyComponent />
</ErrorBoundary>
```

---

## 禁止事项

- **禁止** 在代码中硬编码密钥、密码等敏感信息
- **禁止** 使用 `any` 类型（除非有充分理由）
- **禁止** 在循环中创建函数（使用 useCallback 或提取到外部）
- **禁止** 直接修改 state（使用 setState 或 immer）
- **禁止** 在 useEffect 中直接使用 async 函数
- **禁止** 忽略 ESLint 警告（除非有注释说明原因）

## 必须事项

- **必须** 为所有组件 Props 定义 TypeScript 类型
- **必须** 为列表项提供稳定的 key
- **必须** 处理加载状态和错误状态
- **必须** 对用户输入进行验证
- **必须** 使用 HTTPS 进行 API 请求


---

## Git 工作流

### 分支策略

| 分支 | 用途 |
|------|------|
| `main` / `master` | 生产环境，始终可部署 |
| `develop` | 开发分支，集成最新代码 |
| `feature/*` | 功能开发 |
| `bugfix/*` | Bug 修复 |
| `hotfix/*` | 紧急修复 |

### 提交规范

```
<type>(<scope>): <subject>
```

| Type | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `style` | 代码格式（不影响功能） |
| `refactor` | 重构 |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建/工具变动 |

示例：
```bash
git commit -m "feat(user): 添加用户列表分页功能"
git commit -m "fix(auth): 修复登录状态丢失问题"
git commit -m "docs(readme): 更新开发环境配置说明"
```

### 代码审查

#### Pull Request 流程
1. 创建 PR 前确保代码通过所有检查
2. 填写 PR 描述，说明改动内容和原因
3. 关联相关的 Issue
4. 等待代码审查
5. 根据反馈修改代码
6. 审查通过后合并

#### PR 描述模板
```markdown
## 改动内容
简要描述本次改动的内容

## 改动原因
说明为什么要做这个改动

## 测试情况
- [ ] 单元测试通过
- [ ] 手动测试通过
- [ ] 代码检查通过
```

---

## 开发环境

### 常用命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 代码检查
pnpm lint

# 类型检查
pnpm tsc --noEmit
```

### 代码质量

项目应配置以下工具：
- **ESLint** - JavaScript/TypeScript 代码检查
- **Prettier** - 代码格式化
- **Stylelint** - CSS/Less 代码检查
- **lint-staged** - Git 提交前检查

## 语言规范

### 输出语言
- 所有生成的文档、注释、提示信息使用**中文**
- 代码中的变量名、函数名使用**英文**
- 用户界面文案使用**中文**

### 示例
```typescript
// ✅ 正确：中文注释
// 获取用户信息
function getUserInfo(userId: string) {
  // ...
}

// ✅ 正确：中文提示
message.success('保存成功');
message.error('操作失败，请稍后重试');

// ✅ 正确：中文表单标签
<Form.Item label="用户名" name="username">
  <Input placeholder="请输入用户名" />
</Form.Item>
```

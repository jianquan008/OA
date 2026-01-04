// 模拟网络延迟
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 模拟请求函数
export async function request<T>(
  url: string,
  options: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
    params?: Record<string, any>;
  } = {}
): Promise<T> {
  const { method = 'GET', data, params } = options;
  
  // 模拟网络延迟
  await delay(300 + Math.random() * 500);
  
  // 构建完整 URL
  let fullUrl = url;
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      fullUrl += (url.includes('?') ? '&' : '?') + queryString;
    }
  }
  
  console.log(`[Mock API] ${method} ${fullUrl}`, data ? { data } : '');
  
  // 这里会被各个服务模块的具体实现替换
  // 返回模拟成功响应
  return {
    success: true,
    data: null,
    message: 'Mock response'
  } as T;
}

// 错误处理
export class ApiError extends Error {
  constructor(public code: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

import { request } from '@/utils/request';
import type { Department, User, ApiResponse } from '@/types';
import { mockDepartments, mockEmployees, getEmployeesByDepartment, searchEmployees } from '@/mocks/contacts';

// 获取组织架构
export async function getOrganization(): Promise<ApiResponse<Department[]>> {
  return request('/api/contacts/org', {
    method: 'GET',
  }).then(() => ({
    success: true,
    data: mockDepartments,
  }));
}

// 获取员工列表
export async function getEmployees(params?: {
  department?: string;
  keyword?: string;
}): Promise<ApiResponse<User[]>> {
  return request('/api/contacts/employees', {
    method: 'GET',
    params,
  }).then(() => {
    let employees = mockEmployees;
    
    if (params?.keyword) {
      employees = searchEmployees(params.keyword);
    } else if (params?.department) {
      employees = getEmployeesByDepartment(params.department);
    }
    
    return {
      success: true,
      data: employees,
    };
  });
}

// 获取员工详情
export async function getEmployeeDetail(id: string): Promise<ApiResponse<User>> {
  return request(`/api/contacts/employees/${id}`, {
    method: 'GET',
  }).then(() => {
    const employee = mockEmployees.find(emp => emp.id === id);
    if (!employee) {
      throw new Error('员工不存在');
    }
    
    return {
      success: true,
      data: employee,
    };
  });
}

// 搜索员工
export async function searchEmployee(keyword: string): Promise<ApiResponse<User[]>> {
  return request('/api/contacts/search', {
    method: 'GET',
    params: { keyword },
  }).then(() => ({
    success: true,
    data: searchEmployees(keyword),
  }));
}

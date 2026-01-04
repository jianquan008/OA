import { request } from '@/utils/request';
import type { Vehicle, ApiResponse } from '@/types';
import { mockVehicles, getVehiclesByStatus, getVehiclesByModel, getVehicleStats } from '@/mocks/vehicle';

// 获取车辆列表
export async function getVehicles(params?: {
  status?: Vehicle['status'];
  model?: string;
}): Promise<ApiResponse<Vehicle[]>> {
  return request('/api/vehicles', {
    method: 'GET',
    params,
  }).then(() => {
    let vehicles = mockVehicles;
    
    if (params?.status) {
      vehicles = getVehiclesByStatus(params.status);
    }
    
    if (params?.model) {
      vehicles = getVehiclesByModel(params.model);
    }
    
    return {
      success: true,
      data: vehicles,
    };
  });
}

// 获取车辆详情
export async function getVehicleDetail(id: string): Promise<ApiResponse<Vehicle>> {
  return request(`/api/vehicles/${id}`, {
    method: 'GET',
  }).then(() => {
    const vehicle = mockVehicles.find(v => v.id === id);
    if (!vehicle) {
      throw new Error('车辆不存在');
    }
    
    return {
      success: true,
      data: vehicle,
    };
  });
}

// 获取车辆统计信息
export async function getVehicleStatistics(): Promise<ApiResponse<ReturnType<typeof getVehicleStats>>> {
  return request('/api/vehicles/stats', {
    method: 'GET',
  }).then(() => ({
    success: true,
    data: getVehicleStats(),
  }));
}

// 更新车辆状态
export async function updateVehicleStatus(id: string, status: Vehicle['status']): Promise<ApiResponse<Vehicle>> {
  return request(`/api/vehicles/${id}/status`, {
    method: 'PUT',
    data: { status },
  }).then(() => {
    const vehicle = mockVehicles.find(v => v.id === id);
    if (!vehicle) {
      throw new Error('车辆不存在');
    }
    
    // 模拟更新状态
    vehicle.status = status;
    
    return {
      success: true,
      data: vehicle,
    };
  });
}

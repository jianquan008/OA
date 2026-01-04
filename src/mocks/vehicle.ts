import type { Vehicle } from '@/types';

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    plate: '京A12345',
    model: '比亚迪秦PLUS DM-i',
    status: 'available',
    mileage: 15420,
    battery: 85,
    location: '公司停车场A区',
  },
  {
    id: '2',
    plate: '京B67890',
    model: '特斯拉Model 3',
    status: 'in-use',
    mileage: 8750,
    battery: 65,
    location: '朝阳区建国门',
    driver: '张三',
  },
  {
    id: '3',
    plate: '京C11111',
    model: '奔驰E300L',
    status: 'maintenance',
    mileage: 45600,
    location: '4S店维修中心',
  },
  {
    id: '4',
    plate: '京D22222',
    model: '宝马530Li',
    status: 'available',
    mileage: 32100,
    location: '公司停车场B区',
  },
  {
    id: '5',
    plate: '京E33333',
    model: '蔚来ES6',
    status: 'charging',
    mileage: 12800,
    battery: 45,
    location: '充电站',
  },
  {
    id: '6',
    plate: '京F44444',
    model: '理想ONE',
    status: 'in-use',
    mileage: 9200,
    battery: 78,
    location: '海淀区中关村',
    driver: '李四',
  },
  {
    id: '7',
    plate: '京G55555',
    model: '小鹏P7',
    status: 'available',
    mileage: 6500,
    battery: 92,
    location: '公司停车场C区',
  },
  {
    id: '8',
    plate: '京H66666',
    model: '奥迪A6L',
    status: 'available',
    mileage: 28900,
    location: '公司停车场A区',
  },
];

// 根据状态筛选车辆
export function getVehiclesByStatus(status?: Vehicle['status']) {
  if (!status) return mockVehicles;
  return mockVehicles.filter(vehicle => vehicle.status === status);
}

// 根据车型筛选车辆
export function getVehiclesByModel(model?: string) {
  if (!model) return mockVehicles;
  return mockVehicles.filter(vehicle => 
    vehicle.model.toLowerCase().includes(model.toLowerCase())
  );
}

// 获取车辆统计信息
export function getVehicleStats() {
  const total = mockVehicles.length;
  const available = mockVehicles.filter(v => v.status === 'available').length;
  const inUse = mockVehicles.filter(v => v.status === 'in-use').length;
  const maintenance = mockVehicles.filter(v => v.status === 'maintenance').length;
  const charging = mockVehicles.filter(v => v.status === 'charging').length;
  
  return {
    total,
    available,
    inUse,
    maintenance,
    charging,
  };
}

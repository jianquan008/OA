import { request } from '@/utils/request';
import type { ApprovalItem, CreateApprovalDto, ApiResponse } from '@/types';
import { mockApprovalList, getApprovalsByStatus, getMyApprovals } from '@/mocks/approval';

let approvals = [...mockApprovalList];

// 获取审批列表
export async function getApprovalList(params?: {
  status?: 'pending' | 'approved' | 'rejected';
  type?: 'my' | 'pending' | 'approved';
}): Promise<ApiResponse<ApprovalItem[]>> {
  return request('/api/approval/list', {
    method: 'GET',
    params,
  }).then(() => {
    let filteredApprovals = approvals;
    
    if (params?.type === 'my') {
      // 模拟获取当前用户发起的审批
      filteredApprovals = getMyApprovals('当前用户');
    } else if (params?.type === 'pending') {
      // 待我审批的
      filteredApprovals = getApprovalsByStatus('pending');
    } else if (params?.type === 'approved') {
      // 已审批的
      filteredApprovals = approvals.filter(item => 
        item.status === 'approved' || item.status === 'rejected'
      );
    }
    
    if (params?.status) {
      filteredApprovals = filteredApprovals.filter(item => item.status === params.status);
    }
    
    return {
      success: true,
      data: filteredApprovals,
    };
  });
}

// 创建审批申请
export async function createApproval(data: CreateApprovalDto): Promise<ApiResponse<ApprovalItem>> {
  return request('/api/approval', {
    method: 'POST',
    data,
  }).then(() => {
    const newApproval: ApprovalItem = {
      id: String(approvals.length + 1),
      ...data,
      applicant: '当前用户',
      status: 'pending',
      createTime: new Date().toISOString().slice(0, 19).replace('T', ' '),
    };
    approvals.push(newApproval);
    
    return {
      success: true,
      data: newApproval,
    };
  });
}

// 审批操作（同意/拒绝）
export async function approveItem(id: string, action: 'approve' | 'reject', comment?: string): Promise<ApiResponse<ApprovalItem>> {
  return request(`/api/approval/${id}/${action}`, {
    method: 'POST',
    data: { comment },
  }).then(() => {
    const index = approvals.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('审批项不存在');
    }
    
    approvals[index].status = action === 'approve' ? 'approved' : 'rejected';
    
    return {
      success: true,
      data: approvals[index],
    };
  });
}

// 获取审批详情
export async function getApprovalDetail(id: string): Promise<ApiResponse<ApprovalItem>> {
  return request(`/api/approval/${id}`, {
    method: 'GET',
  }).then(() => {
    const approval = approvals.find(item => item.id === id);
    if (!approval) {
      throw new Error('审批项不存在');
    }
    
    return {
      success: true,
      data: approval,
    };
  });
}

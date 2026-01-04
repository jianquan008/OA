import { request } from '@/utils/request';
import type { ScheduleEvent, CreateEventDto, UpdateEventDto, ApiResponse } from '@/types';
import { mockScheduleEvents } from '@/mocks/schedule';

let events = [...mockScheduleEvents];

// 获取日程列表
export async function getScheduleEvents(params?: {
  startDate?: string;
  endDate?: string;
  type?: string;
}): Promise<ApiResponse<ScheduleEvent[]>> {
  return request('/api/schedule/events', {
    method: 'GET',
    params,
  }).then(() => {
    let filteredEvents = events;
    
    if (params?.type) {
      filteredEvents = filteredEvents.filter(event => event.type === params.type);
    }
    
    if (params?.startDate && params?.endDate) {
      filteredEvents = filteredEvents.filter(event => {
        const eventDate = event.startTime.split(' ')[0];
        return eventDate >= params.startDate! && eventDate <= params.endDate!;
      });
    }
    
    return {
      success: true,
      data: filteredEvents,
    };
  });
}

// 创建日程
export async function createScheduleEvent(data: CreateEventDto): Promise<ApiResponse<ScheduleEvent>> {
  return request('/api/schedule/events', {
    method: 'POST',
    data,
  }).then(() => {
    const newEvent: ScheduleEvent = {
      id: String(events.length + 1),
      ...data,
    };
    events.push(newEvent);
    
    return {
      success: true,
      data: newEvent,
    };
  });
}

// 更新日程
export async function updateScheduleEvent(id: string, data: UpdateEventDto): Promise<ApiResponse<ScheduleEvent>> {
  return request(`/api/schedule/events/${id}`, {
    method: 'PUT',
    data,
  }).then(() => {
    const index = events.findIndex(event => event.id === id);
    if (index === -1) {
      throw new Error('日程不存在');
    }
    
    events[index] = { ...events[index], ...data };
    
    return {
      success: true,
      data: events[index],
    };
  });
}

// 删除日程
export async function deleteScheduleEvent(id: string): Promise<ApiResponse<boolean>> {
  return request(`/api/schedule/events/${id}`, {
    method: 'DELETE',
  }).then(() => {
    const index = events.findIndex(event => event.id === id);
    if (index === -1) {
      throw new Error('日程不存在');
    }
    
    events.splice(index, 1);
    
    return {
      success: true,
      data: true,
    };
  });
}

// 获取日程详情
export async function getScheduleEvent(id: string): Promise<ApiResponse<ScheduleEvent>> {
  return request(`/api/schedule/events/${id}`, {
    method: 'GET',
  }).then(() => {
    const event = events.find(event => event.id === id);
    if (!event) {
      throw new Error('日程不存在');
    }
    
    return {
      success: true,
      data: event,
    };
  });
}

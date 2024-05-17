// @ts-ignore
/* eslint-disable */
import { request } from '@fetch';

/** 异常 POST /test/exception */
export async function exception(options?: { [key: string]: any }) {
  return request<API.SingleResultLong>('/test/exception', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 异常2 POST /test/exception2 */
export async function exception2(options?: { [key: string]: any }) {
  return request<API.BaseResultVoid>('/test/exception2', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 异常3 POST /test/exception3 */
export async function exception3(options?: { [key: string]: any }) {
  return request<API.SingleResultTestDto>('/test/exception3', {
    method: 'POST',
    ...(options || {}),
  });
}

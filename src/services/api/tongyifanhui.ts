// @ts-ignore
/* eslint-disable */
import { request } from '@fetch';

/** 多条数据返回 POST /test/listResult */
export async function listResult(options?: { [key: string]: any }) {
  return request<API.ListResultTestDto>('/test/listResult', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 分页数据返回 POST /test/pageResult */
export async function pageResult(body: API.TestPageParamDto, options?: { [key: string]: any }) {
  return request<API.PageResultTestDto>('/test/pageResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 无数据返回 POST /test/resultBase */
export async function resultBase(body: API.TestParamDto, options?: { [key: string]: any }) {
  return request<API.BaseResultVoid>('/test/resultBase', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单条数据返回 POST /test/singleResult */
export async function singleResult(options?: { [key: string]: any }) {
  return request<API.SingleResultTestDto>('/test/singleResult', {
    method: 'POST',
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from '@fetch';

/** 创建test POST /test/createTest */
export async function createTest(body: API.TestParamDto, options?: { [key: string]: any }) {
  return request<number>('/test/createTest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

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

/** 根据id查询测试 GET /test/findTestById/${param0} */
export async function findTestById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findTestByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TestDto>(`/test/findTestById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

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

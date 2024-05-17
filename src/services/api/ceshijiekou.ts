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

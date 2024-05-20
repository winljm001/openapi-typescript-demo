// @ts-ignore
/* eslint-disable */
import { request } from '@fetch';

/** 此处后端没有提供注释 POST /api/user/create */
export async function createUser(body: API.UserDTO, options?: { [key: string]: any }) {
  return request<API.UserDTO>('/api/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/user/getUserById/${param0} */
export async function getUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserDTO>(`/api/user/getUserById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

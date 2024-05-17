import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
/**
 * 接口返回的数据基础结构
 */
interface ResponseBase {
  /** data */
  data?: any;

  /** code */
  code?: number;

  /** message */
  message?: string;
  /**
   * 错误信息兼容（openapi）
   */
  msg?: string;
}
const http = axios.create();

// Axios 拦截器，同意处理错误
http.interceptors.response.use(
  (response: AxiosResponse<ResponseBase>) => {
    const data = response.data;
    const resMessage = data?.message || data?.msg;
    // 操作不成功时直接提示
    if (data.code !== 200) {
      // message.error(resMessage);
      return Promise.reject(resMessage);
    }

    return response;
  },
  ({ response }: AxiosError<ResponseBase>) => {
    if (response) {
      const { data } = response;
      const msg = data?.message;

      // 全局响应拦截需要重写

      throw new Error(msg);
    } else {
      throw new Error("网络异常～");
    }
  }
);

// 在 buildOptions 的时候已经把 GET 类的参数添加到了 URL 上，这里就可以不需要序列化
// axios.interceptors.request.use((config: AxiosRequestConfig) => {
//   config.paramsSerializer = (params: any) => qs.stringify(params);
//   return config;
// });

/**
 * axios request 请求
 * @description 对请求简单封装，添加默认参数
 */
export const request = <T = any>(url: string, options: AxiosRequestConfig) => {
  const Authorization = "";
  const newOptions: AxiosRequestConfig = {
    // credentials: 'include',
    timeout: 60000,
    withCredentials: true,
    ...options,
    headers: {
      // 自定义 header 的时候应该可以重置 token 字符串
      Authorization,
      ...(options.headers || {}),
    },
    url: `${url}`,
  };
  return http.request<T>(newOptions).then((data) => data?.data);
};

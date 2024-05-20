type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class BaseResultVoid {
    /** 错误码 */
    code?: string;

    /** 返回数据 */
    data?: object;

    /** 返回消息 */
    message?: string;

    /** 是否成功 */
    success?: boolean;
  }

  export class ListResultTestDto {
    /** 错误码 */
    code?: string;

    /** 返回数据 */
    data?: Array<defs.TestDto>;

    /** 返回消息 */
    message?: string;

    /** 是否成功 */
    success?: boolean;
  }

  export class LocalTime {
    /** hour */
    hour?: number;

    /** minute */
    minute?: number;

    /** nano */
    nano?: number;

    /** second */
    second?: number;
  }

  export class PageListTestDto {
    /** 数据列表 */
    list?: Array<defs.TestDto>;

    /** 页码 */
    page?: number;

    /** 总记录数 */
    total?: number;
  }

  export class PageResultTestDto {
    /** 错误码 */
    code?: string;

    /** data */
    data?: defs.PageListTestDto;

    /** 返回消息 */
    message?: string;

    /** 是否成功 */
    success?: boolean;
  }

  export class SingleResultLong {
    /** 错误码 */
    code?: string;

    /** 返回数据 */
    data?: number;

    /** 返回消息 */
    message?: string;

    /** 是否成功 */
    success?: boolean;
  }

  export class SingleResultTestDto {
    /** 错误码 */
    code?: string;

    /** data */
    data?: defs.TestDto;

    /** 返回消息 */
    message?: string;

    /** 是否成功 */
    success?: boolean;
  }

  export class TestDto {
    /** 年龄 */
    age?: number;

    /** 创建日期 */
    createDate?: string;

    /** 创建日期时间 */
    createDateTime?: string;

    /** createTime */
    createTime?: defs.LocalTime;

    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** 性别 */
    sex?: boolean;

    /** 状态 */
    statusEnum?: 'ENABLE' | 'DISABLE';

    /** 状态2 */
    statusEnum2?: 'ENABLE' | 'DISABLE';
  }

  export class TestPageParamDto {
    /** 名称 */
    name?: string;

    /** 页码 */
    page?: number;

    /** 每页数量 */
    pageSize?: number;
  }

  export class TestParamDto {
    /** 年龄 */
    age?: number;

    /** 创建日期 */
    createDate?: string;

    /** 创建日期时间 */
    createDateTime?: string;

    /** createTime */
    createTime?: defs.LocalTime;

    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** 性别 */
    sex?: boolean;

    /** 状态 */
    statusEnum?: 'ENABLE' | 'DISABLE';
  }

  export class UserDTO {
    /** createBy */
    createBy?: number;

    /** createTime */
    createTime?: string;

    /** email */
    email?: string;

    /** id */
    id?: number;

    /** mobileNo */
    mobileNo?: string;

    /** name */
    name?: string;

    /** status */
    status?: number;
  }
}

declare namespace API {
  /**
   * 测试接口
   */
  export namespace test {
    /**
     * 创建test
     * /test/createTest
     */
    export namespace createTest {
      export class Params {}

      export type Response = number;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.TestParamDto,
      ): Promise<number>;
    }

    /**
     * 异常
     * /test/exception
     */
    export namespace exception {
      export class Params {}

      export type Response = defs.SingleResultLong;
      export const init: Response;
      export function request(params: Params): Promise<defs.SingleResultLong>;
    }

    /**
     * 异常2
     * /test/exception2
     */
    export namespace exception2 {
      export class Params {}

      export type Response = defs.BaseResultVoid;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResultVoid>;
    }

    /**
     * 异常3
     * /test/exception3
     */
    export namespace exception3 {
      export class Params {}

      export type Response = defs.SingleResultTestDto;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.SingleResultTestDto>;
    }

    /**
     * 根据id查询测试
     * /test/findTestById/{id}
     */
    export namespace findTestById {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.TestDto;
      export const init: Response;
      export function request(params: Params): Promise<defs.TestDto>;
    }

    /**
     * 统一返回--多条数据返回
     * /test/listResult
     */
    export namespace listResult {
      export class Params {}

      export type Response = defs.ListResultTestDto;
      export const init: Response;
      export function request(params: Params): Promise<defs.ListResultTestDto>;
    }

    /**
     * 统一返回--分页数据返回
     * /test/pageResult
     */
    export namespace pageResult {
      export class Params {}

      export type Response = defs.PageResultTestDto;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.TestPageParamDto,
      ): Promise<defs.PageResultTestDto>;
    }

    /**
     * 统一返回--无数据返回
     * /test/resultBase
     */
    export namespace resultBase {
      export class Params {}

      export type Response = defs.BaseResultVoid;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.TestParamDto,
      ): Promise<defs.BaseResultVoid>;
    }

    /**
     * 统一返回--单条数据返回
     * /test/singleResult
     */
    export namespace singleResult {
      export class Params {}

      export type Response = defs.SingleResultTestDto;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.SingleResultTestDto>;
    }
  }
}

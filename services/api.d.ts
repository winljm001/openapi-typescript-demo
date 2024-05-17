type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {}

declare namespace API {
  /**
   * user-controller
   */
  export namespace user {
    /**
     * undefined
     * /api/user/create
     */
    export namespace createUser {
      export class Params {
        /** userDTO */
        userDTO: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * undefined
     * /api/user/{id}
     */
    export namespace getUserById {
      export class Params {
        /** id */
        id: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 测试接口
   */
  export namespace 测试接口 {
    /**
     * 创建test
     * /test/createTest
     */
    export namespace createTest {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据id查询测试
     * /test/findTestById/{id}
     */
    export namespace findTestById {
      export class Params {
        /** id */
        id: any;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }
}

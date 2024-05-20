declare namespace API {
  type BaseResultVoid = {
    /** 是否成功 */
    success?: boolean;
    /** 错误码 */
    code?: string;
    /** 返回消息 */
    message?: string;
    /** 返回数据 */
    data?: Record<string, any>;
  };

  type findTestByIdParams = {
    id: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type ListResultTestDto = {
    /** 是否成功 */
    success?: boolean;
    /** 错误码 */
    code?: string;
    /** 返回消息 */
    message?: string;
    /** 返回数据 */
    data?: TestDto[];
  };

  type LocalTime = {
    hour?: number;
    minute?: number;
    second?: number;
    nano?: number;
  };

  type PageListTestDto = {
    /** 页码 */
    page?: number;
    /** 总记录数 */
    total?: number;
    /** 数据列表 */
    list?: TestDto[];
  };

  type PageResultTestDto = {
    /** 是否成功 */
    success?: boolean;
    /** 错误码 */
    code?: string;
    /** 返回消息 */
    message?: string;
    data?: PageListTestDto;
  };

  type SingleResultLong = {
    /** 是否成功 */
    success?: boolean;
    /** 错误码 */
    code?: string;
    /** 返回消息 */
    message?: string;
    /** 返回数据 */
    data?: number;
  };

  type SingleResultTestDto = {
    /** 是否成功 */
    success?: boolean;
    /** 错误码 */
    code?: string;
    /** 返回消息 */
    message?: string;
    data?: TestDto;
  };

  type TestDto = {
    /** 主键ID */
    id?: number;
    /** 名称 */
    name?: string;
    /** 性别 */
    sex?: boolean;
    /** 年龄 */
    age?: number;
    /** 创建日期时间 */
    createDateTime?: string;
    /** 创建日期 */
    createDate?: string;
    createTime?: LocalTime;
    /** 状态 */
    statusEnum?: 'ENABLE' | 'DISABLE';
    /** 状态2 */
    statusEnum2?: 'ENABLE' | 'DISABLE';
  };

  type TestPageParamDto = {
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 名称 */
    name?: string;
  };

  type TestParamDto = {
    /** 主键ID */
    id?: number;
    /** 名称 */
    name?: string;
    /** 性别 */
    sex?: boolean;
    /** 年龄 */
    age?: number;
    /** 创建日期时间 */
    createDateTime?: string;
    /** 创建日期 */
    createDate?: string;
    createTime?: LocalTime;
    /** 状态 */
    statusEnum?: 'ENABLE' | 'DISABLE';
  };

  type UserDTO = {
    id?: number;
    name?: string;
    mobileNo?: string;
    email?: string;
    status?: number;
    createBy?: number;
    createTime?: string;
  };
}

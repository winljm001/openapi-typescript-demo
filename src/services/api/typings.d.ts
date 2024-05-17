declare namespace API {
  type createUserParams = {
    userDTO: UserDTO;
  };

  type findTestByIdParams = {
    id: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type LocalTime = {
    hour?: number;
    minute?: number;
    second?: number;
    nano?: number;
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

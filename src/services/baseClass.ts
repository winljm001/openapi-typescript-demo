export class BaseResultVoid {
  /** 错误码 */
  code = '';

  /** 返回数据 */
  data = undefined;

  /** 返回消息 */
  message = '';

  /** 是否成功 */
  success = false;
}

export class ListResultTestDto {
  /** 错误码 */
  code = '';

  /** 返回数据 */
  data = [];

  /** 返回消息 */
  message = '';

  /** 是否成功 */
  success = false;
}

export class LocalTime {
  /** hour */
  hour = undefined;

  /** minute */
  minute = undefined;

  /** nano */
  nano = undefined;

  /** second */
  second = undefined;
}

export class PageListTestDto {
  /** 数据列表 */
  list = [];

  /** 页码 */
  page = undefined;

  /** 总记录数 */
  total = undefined;
}

export class PageResultTestDto {
  /** 错误码 */
  code = '';

  /** data */
  data = new PageListTestDto();

  /** 返回消息 */
  message = '';

  /** 是否成功 */
  success = false;
}

export class SingleResultLong {
  /** 错误码 */
  code = '';

  /** 返回数据 */
  data = undefined;

  /** 返回消息 */
  message = '';

  /** 是否成功 */
  success = false;
}

export class SingleResultTestDto {
  /** 错误码 */
  code = '';

  /** data */
  data = new TestDto();

  /** 返回消息 */
  message = '';

  /** 是否成功 */
  success = false;
}

export class TestDto {
  /** 年龄 */
  age = undefined;

  /** 创建日期 */
  createDate = '';

  /** 创建日期时间 */
  createDateTime = '';

  /** createTime */
  createTime = new LocalTime();

  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** 性别 */
  sex = false;

  /** 状态 */
  statusEnum = 'ENABLE';

  /** 状态2 */
  statusEnum2 = 'ENABLE';
}

export class TestPageParamDto {
  /** 名称 */
  name = '';

  /** 页码 */
  page = undefined;

  /** 每页数量 */
  pageSize = undefined;
}

export class TestParamDto {
  /** 年龄 */
  age = undefined;

  /** 创建日期 */
  createDate = '';

  /** 创建日期时间 */
  createDateTime = '';

  /** createTime */
  createTime = new LocalTime();

  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** 性别 */
  sex = false;

  /** 状态 */
  statusEnum = 'ENABLE';
}

export class UserDTO {
  /** createBy */
  createBy = undefined;

  /** createTime */
  createTime = '';

  /** email */
  email = '';

  /** id */
  id = undefined;

  /** mobileNo */
  mobileNo = '';

  /** name */
  name = '';

  /** status */
  status = undefined;
}

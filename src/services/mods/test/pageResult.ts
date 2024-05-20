/**
 * @desc 统一返回--分页数据返回
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageResultTestDto();

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(pontCore.getUrl('/test/pageResult', params, 'POST'), {
    method: 'POST',
    body: bodyParams,
  });
}

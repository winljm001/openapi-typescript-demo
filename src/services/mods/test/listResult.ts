/**
 * @desc 统一返回--多条数据返回
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.ListResultTestDto();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/test/listResult', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}

/**
 * @desc 统一返回--单条数据返回
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.SingleResultTestDto();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/test/singleResult', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}

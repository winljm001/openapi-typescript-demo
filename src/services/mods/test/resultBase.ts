/**
 * @desc 统一返回--无数据返回
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.BaseResultVoid();

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(pontCore.getUrl('/test/resultBase', params, 'POST'), {
    method: 'POST',
    body: bodyParams,
  });
}

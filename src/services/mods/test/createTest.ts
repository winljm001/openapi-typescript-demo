/**
 * @desc 创建test
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(pontCore.getUrl('/test/createTest', params, 'POST'), {
    method: 'POST',
    body: bodyParams,
  });
}

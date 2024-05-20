/**
 * @desc 异常
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.SingleResultLong();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/test/exception', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}

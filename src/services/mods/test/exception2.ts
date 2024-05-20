/**
 * @desc 异常2
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.BaseResultVoid();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/test/exception2', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}

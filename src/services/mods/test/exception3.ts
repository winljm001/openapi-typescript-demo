/**
 * @desc 异常3
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.SingleResultTestDto();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/test/exception3', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}

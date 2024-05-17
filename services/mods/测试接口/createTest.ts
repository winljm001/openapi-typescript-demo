/**
 * @desc 创建test
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params: Params, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/test/createTest', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}

/**
 * @desc 根据id查询测试
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id: any;
}

export const init = undefined;

export function request(params: Params, options?: any) {
  return PontCore.fetch(
    PontCore.getUrl('/test/findTestById/{id}', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}

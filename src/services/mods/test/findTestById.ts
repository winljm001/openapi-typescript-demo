/**
 * @desc 根据id查询测试
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** id */
  id: number;
}

export const init = new defs.TestDto();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/test/findTestById/{id}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}

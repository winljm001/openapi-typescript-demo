/**
 * @desc undefined
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** userDTO */
  userDTO: any;
}

export const init = undefined;

export function request(params: Params, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/api/user/create', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}

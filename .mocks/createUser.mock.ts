// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/user/create': (req: Request, res: Response) => {
    res.status(200).send({
      id: 78,
      name: '唐超',
      mobileNo: '府车即连直其记需方第热音响光三美。',
      email: 'r.uxkogjed@jvleccb.tv',
      status: 82,
      createBy: 86,
      createTime: '1980-08-25 00:41:54',
    });
  },
};

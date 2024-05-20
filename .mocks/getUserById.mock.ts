// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/user/getUserById/:id': (req: Request, res: Response) => {
    res.status(200).send({
      id: 79,
      name: '康桂英',
      mobileNo: '则片论多己每治类做清代质加识段。',
      email: 'd.jofymi@cixrxcqfa.re',
      status: 98,
      createBy: 63,
      createTime: '2004-11-15 21:08:37',
    });
  },
};

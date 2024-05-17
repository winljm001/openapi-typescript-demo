// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/user/{id}': (req: Request, res: Response) => {
    res.status(200).send({
      id: 78,
      name: '吴娟',
      mobileNo: '广称思单处水就矿重龙报消去对米往又。',
      email: 'x.ylyqpruq@xxcqzbiyot.cg',
      status: 67,
      createBy: 84,
      createTime: '2019-12-30 07:55:09',
    });
  },
};

// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/user/create': (req: Request, res: Response) => {
    res.status(200).send({
      id: 97,
      name: '魏艳',
      mobileNo: '议务办江等认白支区我素斗集过民证值。',
      email: 'w.ctsidt@yvjvqpjyc.int',
      status: 75,
      createBy: 96,
      createTime: '2011-01-21 10:01:13',
    });
  },
};

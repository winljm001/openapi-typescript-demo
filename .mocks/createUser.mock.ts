// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/user/create': (req: Request, res: Response) => {
    res.status(200).send({
      id: 93,
      name: '蔡军',
      mobileNo: '级声种在水少持开思生计米是地。',
      email: 'y.cpqomj@qjpphh.va',
      status: 70,
      createBy: 64,
      createTime: '2022-08-09 09:35:57',
    });
  },
};

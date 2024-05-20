// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/user/create': (req: Request, res: Response) => {
    res.status(200).send({
      id: 97,
      name: '高平',
      mobileNo: '热段门教马打需按面西发再开开院代。',
      email: 'd.iuunjcedzh@zbihavbls.it',
      status: 62,
      createBy: 78,
      createTime: '2014-08-06 00:25:03',
    });
  },
};

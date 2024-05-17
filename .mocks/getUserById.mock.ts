// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/user/{id}': (req: Request, res: Response) => {
    res.status(200).send({
      id: 93,
      name: '郝静',
      mobileNo: '看你除形干声增温是并叫布原其开龙史。',
      email: 'y.yzyfgpts@xwxmvgbz.tw',
      status: 96,
      createBy: 96,
      createTime: '1999-04-20 12:13:11',
    });
  },
};

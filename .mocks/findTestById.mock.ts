// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /test/findTestById/:id': (req: Request, res: Response) => {
    res.status(200).send({
      id: 79,
      name: '何洋',
      sex: true,
      age: 69,
      createDateTime: '2021-12-13 21:58:59',
      createDate: '2001-03-08',
      createTime: { hour: 96, minute: 63, second: 98, nano: 78 },
      statusEnum: 'ENABLE',
      statusEnum2: 'ENABLE',
    });
  },
};

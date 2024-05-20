// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /test/findTestById/:id': (req: Request, res: Response) => {
    res.status(200).send({
      id: 78,
      name: '宋明',
      sex: false,
      age: 70,
      createDateTime: '1995-08-17 21:54:50',
      createDate: '1990-05-17',
      createTime: { hour: 80, minute: 75, second: 84, nano: 97 },
      statusEnum: 'ENABLE',
      statusEnum2: 'ENABLE',
    });
  },
};

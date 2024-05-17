// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /test/findTestById/:id': (req: Request, res: Response) => {
    res.status(200).send({
      id: 89,
      name: '沈霞',
      sex: false,
      age: 64,
      createDateTime: '2014-11-17 02:05:52',
      createDate: '2001-02-11',
      createTime: { hour: 61, minute: 61, second: 99, nano: 87 },
      statusEnum: 'ENABLE',
      statusEnum2: 'ENABLE',
    });
  },
};

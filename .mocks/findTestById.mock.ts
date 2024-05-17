// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /test/findTestById/:id': (req: Request, res: Response) => {
    res.status(200).send({
      id: 71,
      name: '范杰',
      sex: false,
      age: 74,
      createDateTime: '2018-07-31 06:20:11',
      createDate: '2008-12-25',
      createTime: { hour: 85, minute: 82, second: 89, nano: 69 },
      statusEnum: 'ENABLE',
      statusEnum2: 'ENABLE',
    });
  },
};

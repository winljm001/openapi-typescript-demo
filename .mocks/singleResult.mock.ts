// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/singleResult': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      code: '花下拉难月红组果队整北行争京权队么。',
      message: '深广物道年斗后又候飞南始安特自构年。',
      data: {
        id: 76,
        name: '程刚',
        sex: true,
        age: 87,
        createDateTime: '1996-06-25 23:03:52',
        createDate: '1978-11-21',
        createTime: { hour: 63, minute: 76, second: 71, nano: 100 },
        statusEnum: 'ENABLE',
        statusEnum2: 'ENABLE',
      },
    });
  },
};

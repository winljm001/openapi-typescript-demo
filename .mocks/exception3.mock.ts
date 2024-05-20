// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/exception3': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '应交养民从华做式务真头号速已。',
      message: '合线合提装九放王从严较革科种数十战我。',
      data: {
        id: 64,
        name: '姜勇',
        sex: true,
        age: 85,
        createDateTime: '1977-07-11 04:05:52',
        createDate: '2008-02-16',
        createTime: { hour: 98, minute: 94, second: 85, nano: 81 },
        statusEnum: 'ENABLE',
        statusEnum2: 'ENABLE',
      },
    });
  },
};

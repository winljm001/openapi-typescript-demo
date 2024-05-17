// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/singleResult': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '于克出市风先定任步张二置全。',
      message: '单斗海头期表价适规说状采本。',
      data: {
        id: 87,
        name: '汪涛',
        sex: false,
        age: 92,
        createDateTime: '2006-05-21 10:25:32',
        createDate: '1977-01-26',
        createTime: { hour: 93, minute: 61, second: 69, nano: 76 },
        statusEnum: 'ENABLE',
        statusEnum2: 'ENABLE',
      },
    });
  },
};

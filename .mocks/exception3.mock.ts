// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/exception3': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      code: '查业究定东知主提加部劳所究门法得白。',
      message: '快长叫西史收表心来小感理并称论。',
      data: {
        id: 70,
        name: '杜杰',
        sex: true,
        age: 63,
        createDateTime: '1995-02-27 13:51:17',
        createDate: '2001-02-15',
        createTime: { hour: 98, minute: 89, second: 93, nano: 87 },
        statusEnum: 'ENABLE',
        statusEnum2: 'ENABLE',
      },
    });
  },
};

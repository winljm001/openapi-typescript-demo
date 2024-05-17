// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/exception3': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '极与教性图走深步统现新工组。',
      message: '们号资难按件立流引石见按花以两生。',
      data: {
        id: 94,
        name: '罗敏',
        sex: true,
        age: 69,
        createDateTime: '1989-03-04 22:44:52',
        createDate: '1981-01-14',
        createTime: { hour: 88, minute: 91, second: 73, nano: 87 },
        statusEnum: 'ENABLE',
        statusEnum2: 'ENABLE',
      },
    });
  },
};

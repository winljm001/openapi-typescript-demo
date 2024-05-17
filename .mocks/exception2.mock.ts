// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/exception2': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '厂象取器斯表都些力际边照知价花。',
      message: '照却于红历强她类三气做采完儿劳区。',
      data: {},
    });
  },
};

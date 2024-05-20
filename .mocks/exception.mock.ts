// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/exception': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '记我区间用解却认部至养广开则。',
      message: '大九斯相动音开议公文基展中住南。',
      data: 66,
    });
  },
};

// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/resultBase': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '边时级矿温土群儿装没不段今。',
      message: '全适活义头近全里五并道备西。',
      data: {},
    });
  },
};

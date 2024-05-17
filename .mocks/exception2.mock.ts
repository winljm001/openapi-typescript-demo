// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/exception2': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '命色除产形生看便北而张少交政。',
      message: '门候门事又深林被历第外至新温好。',
      data: {},
    });
  },
};

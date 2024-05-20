// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/exception2': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '本后号品做理研者物家必方二民次生。',
      message: '会矿放要论安主些华事提亲志。',
      data: {},
    });
  },
};

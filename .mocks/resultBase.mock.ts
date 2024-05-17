// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/resultBase': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      code: '军史学万示于布集便克无件工。',
      message: '受光器设史龙后特构革难下群京确计油。',
      data: {},
    });
  },
};

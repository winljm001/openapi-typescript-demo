// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/exception': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      code: '但影易保多名易统技里般委领我。',
      message: '在后置为全图南同号被易调相对加值。',
      data: 76,
    });
  },
};

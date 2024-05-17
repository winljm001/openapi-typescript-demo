// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/exception': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '命得农及是科积办回有四是切住感。',
      message: '都识必层飞做七体百铁制府能。',
      data: 90,
    });
  },
};

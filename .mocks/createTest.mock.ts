// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/createTest': (req: Request, res: Response) => {
    res.status(200).send(92);
  },
};

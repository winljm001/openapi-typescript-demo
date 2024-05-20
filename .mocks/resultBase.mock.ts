// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/resultBase': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '回属工发毛度特处红风是十五气圆农产点。',
      message: '地行不感果比史心受而头认月见作数经所。',
      data: {},
    });
  },
};

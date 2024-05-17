// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/user/{id}': (req: Request, res: Response) => {
    res.status(200).send({
      id: 79,
      name: '谭秀兰',
      mobileNo: '石给办离强革义采头效收完所科消对红。',
      email: 'b.lhtli@oemrtbt.mp',
      status: 93,
      createBy: 67,
      createTime: '1999-02-27 02:25:35',
    });
  },
};

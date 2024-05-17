// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/singleResult': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      code: '规照验土那五它离须接级干问主林为意。',
      message: '把去火必是音看天系流则京连深系院命。',
      data: {
        id: 69,
        name: '潘芳',
        sex: false,
        age: 76,
        createDateTime: '2009-08-25 17:55:32',
        createDate: '2004-12-02',
        createTime: { hour: 81, minute: 72, second: 100, nano: 78 },
        statusEnum: 'ENABLE',
        statusEnum2: 'ENABLE',
      },
    });
  },
};

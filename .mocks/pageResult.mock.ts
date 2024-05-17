// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /test/pageResult': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      code: '满目月对听众置连影第比争正。',
      message: '权系使公天律路压年须十起值点力很。',
      data: {
        page: 66,
        total: 76,
        list: [
          {
            id: 72,
            name: '郝超',
            sex: false,
            age: 60,
            createDateTime: '1996-02-15 20:09:37',
            createDate: '2024-04-20',
            createTime: { hour: 72, minute: 62, second: 74, nano: 69 },
            statusEnum: 'ENABLE',
            statusEnum2: 'ENABLE',
          },
          {
            id: 64,
            name: '孙平',
            sex: true,
            age: 84,
            createDateTime: '2019-12-25 19:33:52',
            createDate: '1995-09-30',
            createTime: { hour: 85, minute: 86, second: 87, nano: 97 },
            statusEnum: 'ENABLE',
            statusEnum2: 'ENABLE',
          },
          {
            id: 70,
            name: '龙磊',
            sex: true,
            age: 93,
            createDateTime: '1987-02-24 05:11:22',
            createDate: '1972-08-17',
            createTime: { hour: 74, minute: 89, second: 82, nano: 78 },
            statusEnum: 'ENABLE',
            statusEnum2: 'ENABLE',
          },
          {
            id: 68,
            name: '范强',
            sex: false,
            age: 63,
            createDateTime: '1980-06-10 01:52:30',
            createDate: '1992-10-21',
            createTime: { hour: 98, minute: 77, second: 65, nano: 86 },
            statusEnum: 'ENABLE',
            statusEnum2: 'ENABLE',
          },
          {
            id: 68,
            name: '邓静',
            sex: false,
            age: 99,
            createDateTime: '1979-04-10 23:36:20',
            createDate: '2002-06-20',
            createTime: { hour: 63, minute: 98, second: 72, nano: 98 },
            statusEnum: 'ENABLE',
            statusEnum2: 'ENABLE',
          },
          {
            id: 72,
            name: '罗明',
            sex: false,
            age: 72,
            createDateTime: '1986-06-24 08:54:47',
            createDate: '1978-12-03',
            createTime: { hour: 93, minute: 68, second: 64, nano: 76 },
            statusEnum: 'ENABLE',
            statusEnum2: 'ENABLE',
          },
        ],
      },
    });
  },
};

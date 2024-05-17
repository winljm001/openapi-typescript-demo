const defs = {};

const escapeDeadCycle = (fn, num = 30) => {
  let n = 0;

  return (...args) => {
    if (n > num) return {};
    n++;

    const res = fn(...args);

    return res;
  };
};

Object.keys(defs).forEach((key) => {
  defs[key] = escapeDeadCycle(defs[key]);
});

export default {
  /** user-controller */
  user: {
    /** undefined */
    createUser: () => null,
    /** undefined */
    getUserById: () => null,
  },

  /** 测试接口 */
  测试接口: {
    /** 创建test */
    createTest: () => null,
    /** 根据id查询测试 */
    findTestById: () => null,
  },
};

const data = {
  b: {
    b: {
      b: {
        a: {
          b: {
            count: 0,
          },
          count: 0,
        },
        b: {
          count: 4,
        },
        count: 3,
      },
      a: {
        b: {
          count: 0,
        },
        count: 0,
      },
      count: 2,
    },
    a: {
      b: {
        count: 3,
      },
      count: 0,
    },
  },
};

const s1 = 'abcaabdjaacba';
const data1 = {
  a: {
    b: {
      c: {
        a: {
          a: {
            b: {
              d: {
                j: {
                  a: {
                    a: {
                      c: {
                        b: {
                          a: {},
                          count: 0,
                        },
                        count: 0,
                      },
                      count: 0,
                    },
                    count: 0,
                  },
                  count: 0,
                },
                count: 0,
              },
              count: 0,
            },
            count: 0,
          },
          count: 0,
        },
        count: 0,
      },
      count: 0,
    },
    c: {},
    a: {
      a: {
        b: {
          d: {
            j: {
              a: {
                a: {},
                count: 0,
              },
              count: 0,
            },
            count: 0,
          },
          a: {
            a: {
              a: {},
              count: 7,
            },
            count: 0,
          },
          count: 0,
        },
        count: 3,
      },
      count: 2,
    },
  },
};

// if (node[s]) dfs(node[s], stack);

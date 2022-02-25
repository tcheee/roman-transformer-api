function fromInteger(num) {
  const hash = [
    {
      roman: 'M',
      val: 1000,
    },
    {
      roman: 'CM',
      val: 900,
    },
    {
      roman: 'D',
      val: 500,
    },
    {
      roman: 'CD',
      val: 400,
    },
    {
      roman: 'C',
      val: 100,
    },
    {
      roman: 'XC',
      val: 90,
    },
    {
      roman: 'L',
      val: 50,
    },
    {
      roman: 'XL',
      val: 40,
    },
    {
      roman: 'X',
      val: 10,
    },
    {
      roman: 'IX',
      val: 9,
    },
    {
      roman: 'V',
      val: 5,
    },
    {
      roman: 'IV',
      val: 4,
    },
    {
      roman: 'I',
      val: 1,
    },
  ];
  let res = '';

  let i = 0;
  while (num > 0) {
    if (num >= hash[i].val) {
      res += hash[i].roman;
      num -= hash[i].val;
    } else {
      i++;
    }
  }
  return res;
}

function fromRoman(s) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]] < legend[s[i + 1]]) {
      total += legend[s[i + 1]] - legend[s[i]];
      i++;
    } else {
      total += legend[s[i]];
    }
  }

  return total;
}

module.exports = { fromInteger, fromRoman };

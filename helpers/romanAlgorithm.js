function fromInteger(num) {
  var list = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  var valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var result = '';
  while (num !== 0) {
    for (var i = 0; i < valueList.length; i++) {
      if (num >= valueList[i]) {
        result += list[i];
        num -= valueList[i];
        break;
      }
    }
  }
  return result;
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

function checkInteger(num) {
  const integer = parseInt(num, 10);
  if (integer <= 0) {
    return false;
  }
  return Number.isInteger(integer);
}

function checkRomanString(string) {
  const regex = /[A-Z\s\.\-_]+/g;
  return string.match(regex) === null ? false : true;
}

module.exports = { checkInteger, checkRomanString };

/*
Source: https://github.com/haizlin/fe-interview/issues/1806
Write a function that swtich a number from one numeral system to another.

来源：https://github.com/haizlin/fe-interview/issues/1806
写一个任意进制转换的程序
*/

const numeralSystemSwitch = (string, fromBase = 10, toBase = 2) => {
  if (fromBase < 2 || toBase < 2) throw new Error("Invalid base");
  if (fromBase > 16 || toBase > 16) throw new Error("Base not supported");
  if (!isValidNumber(string, fromBase)) throw new Error("Invalid number");

  let decimalNumber = 0;
  let positive = true;
  let result = [];
  const n = string.length;
  const letterToNumber = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
  const numberToLetter = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
  };
  if (string[0] === "-") {
    positive = false;
    string = string.slice(1);
  }

  for (let i = 0; i < n; i++) {
    const char = string[i];
    if (/\d/.test(char))
      decimalNumber += Number(char) * fromBase ** (n - i - 1);
    else decimalNumber += letterToNumber[char] * fromBase ** (n - i - 1);
  }

  while (decimalNumber) {
    const nextDecimalNumber = Math.floor(decimalNumber / toBase);
    const remainder = decimalNumber % toBase;
    if (remainder < 10) result.push(String(remainder));
    else result.push(numberToLetter[remainder]);
    decimalNumber = nextDecimalNumber;
  }
  result = result.reverse().join("");
  return positive ? result : "-" + result;
};

const isValidNumber = (string, fromBase) => {
  if (!/^-?[0-9A-F]+$/.test(string)) return false;
  const nums = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ].slice(0, fromBase);
  const numsDict = {};
  numsDict["-"] = true;
  nums.forEach(num => (numsDict[num] = true));
  for (const char of string) {
    if (!numsDict[char]) return false;
  }
  return true;
};

module.exports = { numeralSystemSwitch };

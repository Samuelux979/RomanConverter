function convertNumberToRoman(num) {
  if (num < 1 || num > 3999 || !Number.isInteger(num)) return "Error: Enter a number between 1 and 3999.";
  const map = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];
  return map.reduce((result, [value, symbol]) => {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
    return result;
  }, "");
}

function convertRomanToNumber(str) {
  if (!isValidRoman(str)) return "Error: Invalid Roman numeral.";
  const map = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    let curr = map[str[i]];
    let next = map[str[i + 1]];
    if (next > curr) {
      num += next - curr;
      i++;
    } else {
      num += curr;
    }
  }
  return num;
}

function isValidRoman(str) {
  return /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(str);
}

if (typeof module !== "undefined") {
  module.exports = { convertNumberToRoman, convertRomanToNumber };
}

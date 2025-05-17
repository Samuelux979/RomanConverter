function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✅ ${testName}: Passed`);
  } else {
    console.error(`❌ ${testName}: Expected '${expected}', but got '${actual}'`);
    process.exitCode = 1; // Marca el proceso como fallido
  }
}

function convertNumberToRoman(num) {
  if (num < 1 || num > 3999 || !Number.isInteger(num)) return 'Error: Enter a number between 1 and 3999.';

  let map = [
    [1000, "M"], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];

  return map.reduce((result, [value, symbol]) => {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
    return result;
  }, '');
}

function convertRomanToNumber(str) {
  if (!isValidRoman(str)) return 'Error: Invalid Roman numeral.';

  let map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
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

// ---------- Test Cases ----------
assertEquals(convertNumberToRoman(5), 'V', 'Convert 5 to Roman');
assertEquals(convertNumberToRoman(10), 'X', 'Convert 10 to Roman');
assertEquals(convertRomanToNumber('VI'), 6, 'Convert VI to Number');
assertEquals(convertRomanToNumber('XII'), 12, 'Convert XII to Number');

assertEquals(convertNumberToRoman(4300), 'Error: Enter a number between 1 and 3999.', 'Convert 4300 to Roman');
assertEquals(convertNumberToRoman(6000), 'Error: Enter a number between 1 and 3999.', 'Convert 6000 to Roman');
assertEquals(convertNumberToRoman(0), 'Error: Enter a number between 1 and 3999.', 'Convert 0 to Roman');
assertEquals(convertNumberToRoman(-4), 'Error: Enter a number between 1 and 3999.', 'Convert -4 to Roman');
assertEquals(convertNumberToRoman(8 / 3), 'Error: Enter a number between 1 and 3999.', 'Convert 8/3 to Roman');

assertEquals(convertRomanToNumber('XXXXII'), 'Error: Invalid Roman numeral.', 'Convert XXXXII to Number');
assertEquals(convertRomanToNumber('IVXX'), 'Error: Invalid Roman numeral.', 'Convert IVXX to Number');
assertEquals(convertRomanToNumber('35X1C'), 'Error: Invalid Roman numeral.', 'Convert 35X1C to Number');


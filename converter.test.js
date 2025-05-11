const { convertNumberToRoman, convertRomanToNumber } = require("./converter");

test("Convert 5 to Roman", () => {
  expect(convertNumberToRoman(5)).toBe("V");
});

test("Convert XII to Number", () => {
  expect(convertRomanToNumber("XII")).toBe(12);
});

test("Invalid Roman numeral", () => {
  expect(convertRomanToNumber("XXXXII")).toBe("Error: Invalid Roman numeral.");
});

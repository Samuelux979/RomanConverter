function assertEquals(actual, expected, testName) {
  const result = document.getElementById("results");
  const testResult = document.createElement("p");

  if (actual === expected) {
    testResult.innerHTML = `✅ ${testName}: Passed`;
    testResult.style.color = "green";
  } else {
    testResult.innerHTML = `❌ ${testName}: Expected "${expected}", but got "${actual}"`;
    testResult.style.color = "red";
  }

  result.appendChild(testResult);
}

function runTests() {
  assertEquals(convertNumberToRoman(5), "V", "Convert 5 to Roman");
  assertEquals(convertNumberToRoman(10), "X", "Convert 10 to Roman");
  assertEquals(convertRomanToNumber("VI"), 6, "Convert VI to Number");
  assertEquals(convertRomanToNumber("XII"), 12, "Convert XII to Number");
}

window.onload = runTests;

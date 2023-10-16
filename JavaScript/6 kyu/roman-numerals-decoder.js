function romansToNumbers(string) {
  const ROMAN_NUMBER_VALUES = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let resultNumber = 0,
    currentNumber,
    previousNumber = 0;
  for (const char of string.split("").reverse()) {
    currentNumber = ROMAN_NUMBER_VALUES.get(char);
    if (currentNumber >= previousNumber) {
      resultNumber += currentNumber;
    } else {
      resultNumber -= currentNumber;
    }
    previousNumber = currentNumber;
  }
  return resultNumber;
}

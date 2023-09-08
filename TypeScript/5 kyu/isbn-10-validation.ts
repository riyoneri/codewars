export function validISBN10(isbn: string): boolean {
  if (!/^\d{9}[\dX]$/g.test(isbn)) return false;

  let sum: number = 0;
  for (let i = 0; i < 9; i++) {
    sum += +isbn[i] * (i + 1);
  }

  isbn[9] === "X" ? (sum += 10 * 10) : (sum += +isbn[9] * 10);
  return sum % 11 === 0;
}

console.log(validISBN10("1112223339"));
console.log(validISBN10("048665088X"));
console.log(validISBN10("1234554321"));
console.log(validISBN10("1293"));
console.log(validISBN10("1293X123456788"));

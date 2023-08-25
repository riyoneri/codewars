export function solve(s: string): number {
  let consonantsArr = s.match(/[^aioue]+/g);

  let sum: number[] = [];

  if (consonantsArr) {
    for (const group of consonantsArr) {
      let tempSum = 0;
      for (let i = 0; i < group.length; i++) {
        tempSum += group.charCodeAt(i) - 96;
      }
      sum.push(tempSum);
    }
  }

  return Math.max(...sum);
}

console.log(solve("zodiac"));
console.log(solve("chruschtschov"));
console.log(solve("khrushchev"));
console.log(solve("strength"));
console.log(solve("catchphrase"));
console.log(solve("twelfthstreet"));
export function josephusSurvivor(n: number, k: number): number {
  let arr = Array.from(Array(n), (_, i) => i + 1),
    index = 0;

  while (arr.length > 1) {
    index = (index + k - 1) % arr.length;
    arr.splice(index, 1);
  }
  return arr[0];
}

console.log(josephusSurvivor(7, 3));
console.log(josephusSurvivor(11, 19));
console.log(josephusSurvivor(40, 3));
console.log(josephusSurvivor(14, 2));
console.log(josephusSurvivor(100, 1));
console.log(josephusSurvivor(1, 300));

// loop over

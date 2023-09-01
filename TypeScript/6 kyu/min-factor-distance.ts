export function getFactors(n: number): number[] {
  let arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }
  return arr;
}

export function minDistance(n: number): number {
  const arr = getFactors(n);
  let returnArr: number[] = [];
  arr.reduce((previousValue, item, index) => {
    if (arr[index + 1]) previousValue.push(arr[index + 1] - item);
    return previousValue;
  }, returnArr);

  return Math.min(...returnArr);
}
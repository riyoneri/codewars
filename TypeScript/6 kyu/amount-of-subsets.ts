export function estSubsets<T>(list: T[]): number {
   let length = [...new Set(list)].length
  return length == 0 ? 0 : Math.pow(2, length) - 1;
}

console.log(estSubsets([2, 3, 4, 5, 5, 6, 6, 7, 8, 8]))
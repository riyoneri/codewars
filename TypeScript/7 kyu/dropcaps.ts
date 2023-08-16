export function dropCap(s: string): string {
  let arr = s.match(/(^\w|.(?<= .))/g);
  console.log(arr)
  return "lion";
}

console.log(dropCap("Apple Banana"));

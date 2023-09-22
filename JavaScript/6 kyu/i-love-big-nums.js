function biggest(nums) {
  if (nums.every((num) => num === 0)) return "0";
  return nums.sort((a, b) => (`${a}${b}` > `${b}${a}` ? -1 : 1)).join("");
}

console.log(biggest([0, 0, 0, 0]));
console.log(biggest([121, 12]));
console.log(biggest([3, 30, 34, 5, 9]));

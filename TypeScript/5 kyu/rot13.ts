export function rot13(str: string): string {
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  let returnStr: string = "";

  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z]/g.test(str[i])) {
      const index = input.indexOf(str[i]);
      returnStr += output[index];
      continue;
    }
    returnStr += str[i];
  }

  return returnStr;
}

console.log(rot13("mZJ{5PaDn_/YX&.QH"));
console.log(rot13("This is my first ROT13 excercise!"));
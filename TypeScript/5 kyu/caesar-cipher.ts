export const movingShift = (s: string, shift: number) => {
  let returnArr: string[] = [];
  let strArr: string[] = s.split("");
  for (let i = 0, j = shift - 1; i < strArr.length; i++) {
    j > 26 && (j = shift);
    if (/[A-Z]/.test(s[i])) {
      let shifChar = s.charCodeAt(i) + ++j;

      strArr.splice(
        i,
        1,
        String.fromCharCode(shifChar > 90 ? shifChar - 26 : shifChar)
      );
    } else if (/[a-z]/.test(s[i])) {
      let shifChar = s.charCodeAt(i) + ++j;

      strArr.splice(
        i,
        1,
        String.fromCharCode(shifChar > 122 ? shifChar - 26 : shifChar)
      );
    } else {
      ++j;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let partsNum = Math.trunc(i / Math.ceil(s.length / 5));
    returnArr[partsNum]
      ? (returnArr[partsNum] += strArr[i])
      : (returnArr[partsNum] = strArr[i]);
  }

  return returnArr;
};

export const demovingShift = (arr: string[], shift: number) => {
  return "";
};

console.log(
  movingShift(
    "I should have known that you would have a perfect answer for me!!!",
    1
  )
);
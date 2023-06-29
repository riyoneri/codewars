function graph(arr) {
  const greatest = arr.reduce((grt, curr) => (curr > grt ? curr : grt), arr[0]);
  const cols = arr.length;
  let returnArr = [];

  for (let i = greatest; i >= 0; i--) {
    let str = "";
    for (let j = 0; j < cols; j++) {
      if (arr[j] > i) {
        str += "|    |";
      }
      if (arr[j] === i) {
        str += " ____ ";
      }

      if (arr[j] < i) {
        str += "......";
      }
    }
    str += ` ${i == greatest ? "^" : "|"} ${i}`;
    returnArr.push(str);
  }

  console.log(returnArr.join("\n"));

  return returnArr.join("\n");
}

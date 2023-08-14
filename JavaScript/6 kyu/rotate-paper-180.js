function rotatePaper(number) {
  let arr = number.split("");
  number = number.split("").reverse();
  if (
    arr.includes("1") ||
    arr.includes("3") ||
    arr.includes("4") ||
    arr.includes("7")
  ) {
    return false;
  }

  for (let i in arr) {
    if (arr[i] == "6") {
      arr[i] = "9";
      continue;
    }

    if (arr[i] == "9") {
      arr[i] = "6";
    }
  }

  for (let i in arr) {
    if (arr[i] != number[i]) {
      return false;
    }
  }

  return true;
}

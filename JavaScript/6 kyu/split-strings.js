function solution(str) {
  const strArr = str.split("");
  const returnArr = strArr.reduce((arr, item, index, initialArr) => {
    if (index % 2 != 0) arr.push(`${initialArr[index - 1]}${item}`);

    if (index % 2 == 0 && index == initialArr.length - 1) arr.push(`${item}_`);
    return arr;
  }, []);

  return returnArr;
}

multiplicationTable = function (size) {
  let returnArr = [];

  for (let i = 1; i <= size; i++) {
    let singleLine = [];
    for (let j = 1; j <= size; j++) {
      singleLine.push(j * i);
    }
    returnArr.push(singleLine);
    singleLine = [];
  }

  return returnArr;
};

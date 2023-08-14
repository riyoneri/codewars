function expandedForm(num) {
  const arr = (num + "").split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "0") {
      for (let j = i; j < arr.length - 1; j++) arr[i] = `${arr[i]}0`;
    }
  }

  const filteredArr = arr.filter((elt) => elt != "0");
  const returnString = filteredArr.join(" + ");

  //   console.log(returnString)
  return returnString;
}

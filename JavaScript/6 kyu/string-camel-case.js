function toCamelCase(str) {
  let arrString = str.split("");
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] == "-" || arrString[i] == "_") {
      arrString[i + 1] = arrString[i + 1].toUpperCase();
    }
  }

  return arrString.join("").replace(/-|_/g, "");
}

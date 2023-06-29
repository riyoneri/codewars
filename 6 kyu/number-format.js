var numberFormat = function (number) {
  //Your code here
  const numberString = (number + "").split("");
  for (let i = numberString.length - 1; i >= 0; i = i - 3) {
    if (i == numberString.length - 1) continue;
    numberString[i] !== "-" && numberString.splice(i + 1, 0, ",");
  }
  return numberString.join("");
};

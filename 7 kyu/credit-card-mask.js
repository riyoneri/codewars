function maskify(cc) {
  let arr = cc.split("");
  if (arr.length < 4) return cc;

  for (let i = 0; i < arr.length - 4; i++) {
    arr.splice(i, 1, "#");
  }

  const result = (arr + "").replace(/,/g, "");
  return result;
}

function reducePyramid(base) {
  if (base.length == 1) return base[0];

  return reducePyramid(
    base.reduce((newArr, elt, index) => {
      base[index + 1] && newArr.push(elt + base[index + 1]);
      return newArr;
    }, [])
  );
}

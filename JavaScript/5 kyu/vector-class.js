var Vector = function (components) {
  // TODO: Finish the Vector class
  this.arr = components;

  this.add = function (oarr) {
    const otherArr = oarr.arr;
    if (this.arr.length !== otherArr.length)
      throw new Error("Vectors with different lengths");
    let newArr = [];
    for (let i = 0; i < otherArr.length; i++)
      newArr.push(otherArr[i] + this.arr[i]);

    return new Vector(newArr);
  };

  this.subtract = function (oarr) {
    const otherArr = oarr.arr;
    if (this.arr.length !== otherArr.length)
      throw new Error("Vectors with different lengths");
    let newArr = [];
    for (let i = 0; i < otherArr.length; i++)
      newArr.push(this.arr[i] - otherArr[i]);

    return new Vector(newArr);
  };

  this.dot = function (oarr) {
    const otherArr = oarr.arr;
    if (this.arr.length !== otherArr.length)
      throw new Error("Vectors with different lengths");
    return this.arr.reduce((sum, item, index) => {
      return sum + item * otherArr[index];
    }, 0);
  };

  this.norm = function () {
    const sum = this.arr.reduce((sum, item, index) => {
      return sum + Math.pow(item, 2);
    }, 0);

    return Math.sqrt(sum);
  };

  this.toString = function () {
    let str = this.arr.reduce((strHolder, item, index, init) => {
      strHolder += `${item}${init.length - index == 1 ? "" : ","}`;
      return strHolder;
    }, "(");

    str += ")";
    return str.toString();
  };

  this.equals = function (oarr) {
    const otherArr = oarr.arr;
    if (this.arr.length !== otherArr.length) return false;
    for (let i = 0; i < otherArr.length; i++) {
      if (otherArr[i] !== this.arr[i]) return false;
    }
    return true;
  };
};

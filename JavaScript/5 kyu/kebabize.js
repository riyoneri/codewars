const kebabize = (str) =>
  str.replace(/[A-Z]/g, (s) => "-" + s.toLowerCase()).replace(/\d|^-/g, "");

console.log(kebabize("camelsHaveThreeHumps"));
console.log(kebabize("camelsHave3Humps"));
console.log(kebabize("CAMEL"));

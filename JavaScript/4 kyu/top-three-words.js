function topThreeWords(text) {
  const matchArr = text.match(/'?\w+[(?=')]?\w?/gi) || [];
  const matchObj = {};

  for (let match of matchArr) {
    matchObj[match.toLowerCase()] = (matchObj[match.toLowerCase()] || 0) + 1;
  }

  const sortArr = [];
  for (let key in matchObj) sortArr.push([key, matchObj[key]]);

  sortArr.sort((a, b) => b[1] - a[1]);

  const returnArr = [];
  for (let i = 0; i < (sortArr.length > 3 ? 3 : sortArr.length); i++) {
    returnArr.push(sortArr[i][0]);
  }
  return returnArr;
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));
console.log(topThreeWords("a a c b b"));
console.log(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
);
console.log(topThreeWords("  //wont won't won't "));
console.log(topThreeWords("  , e   .. "));
console.log(topThreeWords("  ...  "));
console.log(topThreeWords("  '  "));
console.log(
  topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`)
);
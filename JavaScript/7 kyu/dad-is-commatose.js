const dadFilter = (str) =>
  str.replace(/(?<=,),+|[, ]+$/g, "")

// replace all commas that are followed by commas or commas that end string

console.log(
  dadFilter("money old days politics wife kids,,,,, old money old money me,,, ")
);
// console.log(dadFilter("all this,,,, used to be trees,,,,,,"));
// console.log(
//   dadFilter("i,, don't believe this round earth,,, show me evadence!!")
// );

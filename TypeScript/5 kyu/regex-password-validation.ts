export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

// check for lower case
// check for upper case
// check for numbers
// check size for 6 and more

console.log(REGEXP.test("fjd3IR9"));
console.log(REGEXP.test("ghdfj32"));
console.log(REGEXP.test("DSJKHD23"));
console.log(REGEXP.test("dsF43"));
console.log(REGEXP.test("4fdg5Fj3"));
console.log(REGEXP.test("DHSJdhjsU"));
console.log(REGEXP.test("fjd3IR9"));
console.log(REGEXP.test("fjd3  IR9"));
console.log(REGEXP.test("djI38D55"));
console.log(REGEXP.test("djI3_8D55"));
console.log(REGEXP.test("djI38D55"));

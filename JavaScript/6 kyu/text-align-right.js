function alignRight(text, width) {
  let returnArr = [];
  let indexer = 0;
  text.split(" ").map((word) => {
    if (returnArr[indexer]) {
      if ((returnArr[indexer] + ` ${word}`).length > width) {
        returnArr[indexer] = returnArr[indexer].padStart(width, " ");
        indexer++;
        returnArr[indexer] = word;
      } else {
        returnArr[indexer] += ` ${word}`;
      }
    } else {
      returnArr[indexer] = word;
    }
  });

  returnArr[indexer] = returnArr[indexer].padStart(width, " ");

  return returnArr.join("\n");
}

// Split all text by splitting
// add word on line until width reaches or exceeds
// by width exceeding ommit that word and add spacing in front
// add spacing on last line
// return that array combined by \n

console.log(alignRight("abc def", 10)); //'   abc def'
console.log(alignRight("I take up the whole line", 24)); //I take up the whole line
console.log(alignRight("Two lines, I am", 10)); //Two lines,\n      I am
console.log(
  alignRight(
    "Bacon ipsum dolor amet excepteur ut kevin burgdoggen, shankle cupim dolor officia ground round id ullamco deserunt nisi. Commodo tail qui salami, brisket boudin tri-tip. Labore flank laboris, cow enim proident aliqua sed hamburger consequat. Sed consequat ut non bresaola capicola shoulder excepteur veniam, bacon kevin. Pastrami shank laborum est excepteur non eiusmod bresaola flank in nostrud. Corned beef ex pig do kevin filet mignon in irure deserunt ipsum qui duis short loin. Beef ribs dolore meatball officia rump fugiat in enim corned beef non est.",
    67
  )
);

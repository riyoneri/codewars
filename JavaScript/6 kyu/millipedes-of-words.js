function solution(words) {
  for (let i = 0; i < words.length; i++) {
    let wordaa = [...words];
    let returnStr = wordaa.splice(i, 1)[0];
    for (let j = 0; j < wordaa.length; j++) {
      let compareWord = wordaa[j];
      if (returnStr[0] == compareWord[compareWord.length - 1]) {
        returnStr = `${compareWord}-${returnStr}`;
      } else if (returnStr[returnStr.length - 1] == compareWord[0]) {
        returnStr += `-${compareWord}`;
      }
    }
    const lastWord = wordaa.find(
      (word) =>
        !returnStr.includes(word) && word[0] == returnStr[returnStr.length - 1]
    );

    lastWord && (returnStr += `-${lastWord}`);
    if (returnStr.split("-").length === words.length) return true;
  }
  return false;
}

// if every word we reach we make it first
// check every combination starting from that word and make a whole sentence
// after ched for the last word which can be appended and the add it
// if sentence splitted by - its length is not equal to solution continue loop

console.log(
  solution([
    "excavate",
    "endure",
    "desire",
    "screen",
    "theater",
    "excess",
    "night",
  ])
);

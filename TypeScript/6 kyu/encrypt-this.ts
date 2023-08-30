export const encryptThis = (str: string): string => {
  const words = str.split(" ");
  let newSentence: string = "";
  for (let word of words) {
    let newWord: string = "";
    for (let i = 0; i < word.length; i++) {
      if (i == 0) {
        newWord += word.charCodeAt(i);
        continue;
      }
      if (i == 1) {
        newWord += word[word.length - 1];
        continue;
      }
      if (i == word.length - 1) {
        newWord += word[1];
        continue;
      }

      newWord += word[i];
    }
    newSentence += newSentence ? ` ${newWord}` : `${newWord}`;
  }
  return newSentence;
};

console.log(encryptThis("A wise old owl lived in an oak"));

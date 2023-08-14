function reverseVowels(str) {
  const strArr = str.split("");
  let vowels = [];
  strArr.map((character, index, arr) => {
    if (["i", "I", "u", "U", "o", "O", "a", "A", "e", "E"].includes(character))
      vowels.push({ c: character, i: index });
  });

  let counter = Math.trunc(vowels.length / 2);
  let vowelsLen = vowels.length - 1;
  for (let i = 0; i < counter; i++) {
    let temp = strArr[vowels[i].i];
    strArr[vowels[i].i] = vowels[vowelsLen - i].c;
    strArr[vowels[vowelsLen - i].i] = temp;
  }

  return strArr.join("");
}

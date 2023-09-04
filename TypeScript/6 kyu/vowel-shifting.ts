export function vowelShift(text: string | null, n: number): string | null {
  if (!text) return `Vowels are "a,e,i,o,u".`;

  let vowels: RegExpMatchArray | null = text.match(/[aioue]/g);

  if (!vowels) return text;

  if (n > 0) for (let i = 0; i < n; i++) vowels.unshift(vowels.pop()!);

  if (n < 0) for (let i = 0; i < n; i++) vowels.push(vowels.shift()!);

  let returnText: string = "";
  for (let i = 0, j = 0; i < text.length; i++) {
    if (text[i].match(/[aioue]/)?.length) {
      returnText += vowels[j];
      j++;
      continue;
    }
    returnText += text[i];
  }

  return returnText;
}

console.log(vowelShift("This is a test!", 1));
console.log(vowelShift("This is a test!", 1));
console.log(vowelShift("This is a test!", 3));

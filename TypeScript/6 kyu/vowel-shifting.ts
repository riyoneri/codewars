export function vowelShift(text: string | null, n: number): string | null {
  if (!text) return text;
  const vowels: RegExpMatchArray | null = text.match(/[aioue]/gi);

  if (!vowels) return text;
  if (n > 0) for (let i = 0; i < n; i++) vowels.unshift(vowels.pop()!);
  if (n < 0) for (let i = n; i < 0; i++) vowels.push(vowels.shift()!);

  let returnStr: string = "";

  for (let i = 0, j = 0; i < text.length; i++) {
    if (/[aioue]/i.test(text[i])) {
      returnStr += vowels[j];
      j++;
      continue;
    }
    returnStr += text[i];
  }

  return returnStr;
}

// console.log(vowelShift("This is a test!", 1));
console.log(vowelShift("This is a test!", -2));
// console.log(vowelShift("This is a test!", 3));
// console.log(vowelShift("This is a test!", -1));
console.log(vowelShift("mrxtAM IzXYIVgKIFyOWwJ.", -39));

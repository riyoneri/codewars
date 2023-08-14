const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const fact = (num) => {
  if (num < 1) return 1;
  return num * fact(num - 1);
};

function decomp(n) {
  let counter = 0;
  let str;

  for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) continue;

    let factorial = BigInt(fact(n));
    while (1) {
      if (factorial % BigInt(i) != 0) break;
      counter++;
      factorial /= BigInt(i);
    }

    strHolder = counter > 1 ? `^${counter}` : ``;
    str = str ? `${str} * ${i}${strHolder}` : `${i}${strHolder}`;
    counter = 0;
  }

  return str;
}

console.log(decomp(17));

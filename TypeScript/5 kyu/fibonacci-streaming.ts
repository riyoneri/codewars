export function fibonacciSequence(): Iterator<number>  {
  let a = 0,
    b = 1;

  return {
    next: function () {
      [a, b] = [b, a + b];
      return { value: a };
    },
  };
};

const stream = fibonacciSequence();

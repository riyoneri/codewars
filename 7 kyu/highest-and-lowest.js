function highAndLow(numbers) {
  numbers = numbers.split(" ");
  let minNumber;
  let maxNumber;

  minNumber = +numbers[0];
  maxNumber = +numbers[0];

  for (let i in numbers) {
    if (+numbers[i] > maxNumber) maxNumber = +numbers[i];

    if (+numbers[i] < minNumber) minNumber = +numbers[i];
  }

  return `${maxNumber} ${minNumber}`;
}

function makeLooper(str) {
  let counter = -1;
  return () => {
    counter + 1 == str.length ? (counter = 0) : counter++;
    return str[counter];
  };
}

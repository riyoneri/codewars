const replaceNth = (text, n, oldValue, newValue) =>
  n < 1 ? text : text.replace(new RegExp(`(?<=${oldValue}).`, "g"), newValue);

console.log(replaceNth("Vader said: No, I am your father!", 2, "a", "o"));

export function dropCap(s: string): string {
  return s
    .toLowerCase()
    .replace(/^\w|(?<= ).(?=\w{2})/g, (str: string) => str.toUpperCase());
}

console.log(
  dropCap(
    "Revelation of the contents outraged American public opinion, and helped generate"
  )
);

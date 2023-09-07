export const checkLimit = (num: number): string => {
  if (num <= 0) return "00";
  if (num > 255) return "ff";
  return num.toString(16).padStart(2, "0");
};

export function rgb(r: number, g: number, b: number): string {
  return `${checkLimit(r)}${checkLimit(g)}${checkLimit(b)}`.toUpperCase();
}

console.log(rgb(210, 4, 104));
export const countSmileys = (arr: string[]) =>
  arr.join("").split(/[:;][-~]?[D)]/).length - 1;

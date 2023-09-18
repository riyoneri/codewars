export function validParentheses(parenStr: string): boolean {
  while (parenStr.includes("()")) parenStr = parenStr.replace("()", "")
  return parenStr === ""
}

console.log(validParentheses("()"));
console.log(validParentheses("()(())((()))(())()"));
console.log(validParentheses("())(()"));

export function isOperator(id: string) {
  return ["add", "subtract", "multiply", "divide"].includes(id);
}

export function isDigit(id: string) {
  return /^[0-9]$/.test(id);
}

export function formatNumber(value: string) {
  // Only format valid numbers (not empty, not just '-')
  if (!value) return "0";
  if (value === "-") return value;
  const neg = value.startsWith("-");
  let [intPart, decPart] = (neg ? value.slice(1) : value).split(".");
  // Remove leading zeros except for '0' or '0.xxx'
  if (intPart.length > 1 && intPart.startsWith("0")) {
    intPart = String(parseInt(intPart, 10));
  }
  // Add spaces as thousands separator
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  let formatted = neg ? "-" + intPart : intPart;
  if (decPart !== undefined) formatted += "." + decPart;
  return formatted;
}

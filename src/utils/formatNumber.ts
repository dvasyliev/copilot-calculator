export function formatNumber(value: string) {
  // minimal formatting: trim leading zeros but preserve '0' and decimal
  if (!value) return "0";
  if (value === "-") return value;
  const neg = value.startsWith("-");
  const v = neg ? value.slice(1) : value;
  if (v.startsWith("0") && !v.startsWith("0.")) {
    const parsed = String(parseFloat(v));
    return (neg ? "-" : "") + (parsed === "NaN" ? "0" : parsed);
  }
  return value;
}

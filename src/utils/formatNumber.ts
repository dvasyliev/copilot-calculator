export function formatNumber(value: string) {
  if (!value) return "0";
  if (value === "-") return value;

  const num = parseFloat(value);
  const formatter = new Intl.NumberFormat("en-US", {
    useGrouping: true,
    maximumFractionDigits: 10,
  });

  // Replace the default comma separator with space
  return formatter.format(num).replace(/,/g, " ");
}

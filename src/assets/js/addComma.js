export default function addComma(price) {
  if (price !== undefined) {
    const parts = price.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${parts.join(',')}`;
  }
  return 0;
}

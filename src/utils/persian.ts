const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function toPersianNumber(value: number | string): string {
  return String(value).replace(/[0-9]/g, (d) => PERSIAN_DIGITS[parseInt(d)]);
}

export function formatPrice(num: number): string {
  return toPersianNumber(num.toLocaleString('en-US'));
}

export function formatPriceLabel(num: number): string {
  return `${formatPrice(num)} تومان`;
}

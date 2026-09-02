import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | string, currency = "$") {
  if (typeof price === "number") {
    return `${currency}${price.toFixed(2)}`;
  }
  return price.startsWith("$") || price.startsWith("₹") || price.startsWith("€") || price.startsWith("£")
    ? price
    : `${currency}${price}`;
}

export function buildWhatsAppUrl(phone: string, message: string) {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

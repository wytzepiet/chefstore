import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function priceString(price: number) {
  return price
    .toLocaleString("nl-NL", { style: "currency", currency: "EUR" })
    .replace("€", "")
    .replace(",00", ",-")
    .trim();
}

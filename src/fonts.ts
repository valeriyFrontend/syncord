import { clsx } from "clsx";
import localFont from "next/font/local";

const fontDMSans = localFont({
  src: "../public/fonts/DMSans-Variable.ttf",
  variable: "--font-dm-sans",
});

export const fontClassName = clsx(fontDMSans.variable);

import { Geist_Mono, Urbanist } from "next/font/google";

export const appSans = Urbanist({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

export const appMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

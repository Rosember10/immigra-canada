import type { Metadata } from "next";
import "./globals.css";
import { appMono, appSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Immigra Canada · Acompañamiento migratorio",
  description:
    "Replica editorial en Next.js de la landing de Immigra Canada con React 19, TypeScript 5, Tailwind CSS 4 y GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${appSans.variable} ${appMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

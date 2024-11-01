import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "DevScopeNews",
  description: "A newsletter para você que é Dev!",
};

const font = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  );
}
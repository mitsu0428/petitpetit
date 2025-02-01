import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TODO アプリ",
  description: "petit petit の TODO アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

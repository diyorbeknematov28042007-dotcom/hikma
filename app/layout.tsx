import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIKMA — Millat uchun zamonaviy yechimlar",
  description:
    "HIKMA — web, Telegram bot, AI automation va digital productlar yaratadigan zamonaviy product studio.",
};

export const viewport: Viewport = {
  themeColor: "#00875A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}

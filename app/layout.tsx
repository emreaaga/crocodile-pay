import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrocodilePay | Онлайн-платежи для бизнеса",
  description:
    "Принимайте онлайн-платежи с карт, кошельков, переводов и QR. CrocodilePay — безопасная и быстрая платформа с понятной интеграцией для вашего бизнеса.",
  keywords: [
    "онлайн-платежи",
    "CrocodilePay",
    "платежная система",
    "Uzbekistan fintech",
    "прием карт",
    "QR оплата",
    "кошельки",
    "переводы",
    "платежный сервис",
  ],
  authors: [{ name: "CrocodilePay" }],
  creator: "CrocodilePay",
  publisher: "CrocodilePay",
  openGraph: {
    title: "CrocodilePay | Онлайн-платежи для бизнеса",
    description:
      "Принимайте онлайн-платежи через карты, кошельки, переводы и QR. Безопасность, скорость и простая интеграция.",
    url: "https://crocodile-pay.uz",
    siteName: "CrocodilePay",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "CrocodilePay",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrocodilePay | Онлайн-платежи для бизнеса",
    description:
      "CrocodilePay — платежная платформа с «хваткой» конверсии. Подключите бизнес за день.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="light">
      <body
        className={cn(
          "grainy flex min-h-screen flex-col font-sans antialiased",
          GeistSans.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}

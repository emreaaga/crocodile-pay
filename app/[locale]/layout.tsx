import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  metadataBase: new URL("https://crocodile-pay.uz"),
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
    "платежный сервис"
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
        alt: "CrocodilePay"
      }
    ],
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CrocodilePay | Онлайн-платежи для бизнеса",
    description:
      "CrocodilePay — платежная платформа с «хваткой» конверсии. Подключите бизнес за день.",
    images: ["/og-image.png"]
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="light">
      <body
        className={cn(
          "grainy flex min-h-screen flex-col font-sans antialiased",
          GeistSans.className
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
           <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

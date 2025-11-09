"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const t = useTranslations("Auth");

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
      <Link
        href="/"
        className="absolute left-6 top-6 inline-flex items-center text-sm text-emerald-700 hover:text-emerald-900"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        {t("back")}
      </Link>
      {children}
    </div>
  );
}

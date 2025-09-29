"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, Mail, Lock } from "lucide-react";

export default function SignInPage() {
  const t = useTranslations("Auth");

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
      {/* Кнопка Назад */}
      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center text-sm text-emerald-700 hover:text-emerald-900"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        {t("back")}
      </Link>

      <div className="w-full max-w-md rounded-xl border bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition">
        <h1 className="text-2xl font-bold text-center">{t("signIn.title")}</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          {t("signIn.subtitle")}
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("email")}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="pl-9 mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("password")}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="pl-9 mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            <div className="mt-1 text-right">
              <Link
                href="/forgot-password"
                className="text-xs text-emerald-600 hover:underline"
              >
                {t("forgotPassword")}
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full bg-emerald-600 text-white hover:bg-emerald-700 rounded-md"
            )}
          >
            {t("signIn.button")}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          {t("signIn.noAccount")}{" "}
          <Link
            href="/sign-up"
            className="font-medium text-emerald-600 hover:underline"
          >
            {t("signUp.title")}
          </Link>
        </p>

        <p className="mt-4 text-center text-xs text-gray-400">
          🔒 {t("secureNote")}
        </p>
      </div>
    </div>
  );
}

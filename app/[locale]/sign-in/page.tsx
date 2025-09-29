"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SignInPage() {
  const t = useTranslations("Auth");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-center">{t("signIn.title")}</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          {t("signIn.subtitle")}
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("email")}
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("password")}
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full bg-emerald-600 text-white hover:bg-emerald-700"
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
      </div>
    </div>
  );
}

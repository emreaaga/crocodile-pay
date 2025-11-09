"use client";

import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import { buttonVariants } from "@/components/atoms/ui/button";
import { MobileNav } from "@/components/molecules/MobileNav";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const isUserSignedIn = false;

  return (
    <nav
      className={cn(
        "sticky inset-x-0 top-0 z-40 border-b border-zinc-200",
        "bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400/25 via-emerald-500/50 to-emerald-400/25" />

      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="z-40 flex items-center"
            aria-label={t("home")}
          >
            <Image
              src="/logo.svg"
              alt="CrocodilePay"
              width={24}
              height={24}
              className="h-16 w-16"
              priority
            />
            <span className="text-lg font-semibold tracking-tight sm:text-xl">
              Crocodile<span className="text-emerald-700">Pay</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher />

            {!isUserSignedIn ? (
              <MobileNav />
            ) : (
              <Link
                className={buttonVariants({
                  size: "sm",
                  className: "mr-2 sm:hidden",
                })}
                href="/dashboard"
                aria-label={t("dashboard")}
              >
                {t("dashboard")}
              </Link>
            )}

            <div className="hidden items-center gap-2 sm:flex">
              {!isUserSignedIn ? (
                <>
                  <Link
                    href="/pricing"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className:
                        "text-slate-700 hover:bg-emerald-50 hover:text-slate-900",
                    })}
                  >
                    {t("pricing")}
                  </Link>
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className:
                        "text-slate-700 hover:bg-emerald-50 hover:text-slate-900",
                    })}
                    href="/sign-in"
                  >
                    {t("signIn")}
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        className: "rounded-lg",
                      }),
                      "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm",
                      "hover:opacity-95 hover:shadow-md",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
                    )}
                    href="/sign-up"
                  >
                    {t("signUp")}
                  </Link>
                </>
              ) : (
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "outline",
                    className:
                      "rounded-lg border-emerald-300 text-emerald-700 hover:bg-emerald-50",
                  })}
                  href="/dashboard"
                >
                  {t("dashboard")}
                </Link>
              )}
            </div>

            {isUserSignedIn && (
              <div
                className="h-9 w-9 rounded-full border border-emerald-300 bg-emerald-600/90 shadow-sm"
                aria-hidden
              />
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

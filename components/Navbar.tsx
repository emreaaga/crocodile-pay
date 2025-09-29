"use client";

import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

const Navbar = () => {
  const t = useTranslations("Navbar"); // берём переводы из messages
  const isUserSignedIn = false;

  return (
    <nav
      className={cn(
        "sticky inset-x-0 top-0 z-40 border-b border-zinc-200",
        "bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400/25 via-emerald-500/50 to-emerald-400/25" />

      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          {/* Бренд */}
          <Link href="/" className="z-40 flex items-center gap-2" aria-label={t("home")}>
            <CrocoMark className="h-6 w-6 text-emerald-600" />
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
                  className: "sm:hidden mr-2",
                })}
                href="/dashboard"
                aria-label={t("dashboard")}
              >
                {t("dashboard")}
              </Link>
            )}

            {/* Десктоп-навигация */}
            <div className="hidden items-center gap-2 sm:flex">
              {!isUserSignedIn ? (
                <>
                  <Link
                    href="/pricing"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className:
                        "text-slate-700 hover:text-slate-900 hover:bg-emerald-50",
                    })}
                  >
                    {t("pricing")}
                  </Link>
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className:
                        "text-slate-700 hover:text-slate-900 hover:bg-emerald-50",
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
                      "hover:shadow-md hover:opacity-95",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
};

export default Navbar;

function CrocoMark({ className = "h-6 w-6 text-emerald-600" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M4 22c1-5 7-9 18-9h4l3-3 3 1-3 3 3 3-3 1-3-3h-4C11 15 7 17 6 24"
        fill="currentColor"
        opacity=".9"
      />
      <circle cx="22" cy="12" r="1.4" fill="#0b1220" />
    </svg>
  );
}

function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const [shake, setShake] = useState(false);

  const labelMap: Record<string, string> = {
    ru: "Русский",
    en: "English",
    uz: "O‘zbekcha",
  };

  const handleClick = (target: string, e: React.MouseEvent) => {
    if (target === locale) {
      e.preventDefault(); // отменяем переход
      setShake(true);
      setTimeout(() => setShake(false), 500); // снять класс через 0.5с
    }
  };

  return (
    <details className="relative group">
      <summary
        className="flex cursor-pointer select-none items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
        aria-label="Выбрать язык"
      >
        {locale.toUpperCase()}
        <svg
          className="h-3 w-3 text-slate-500 group-open:rotate-180 transition"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </summary>
      <div className="absolute right-0 z-50 mt-2 w-28 overflow-hidden rounded-md border border-slate-200 bg-white py-1 shadow-lg">
        {Object.entries(labelMap).map(([code, label]) => (
          <Link
            key={code}
            href={pathname}
            locale={code}
            onClick={(e) => handleClick(code, e)}
            className={cn(
              "block px-3 py-1.5 text-sm hover:bg-slate-50",
              shake && code === locale && "animate-shake"
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </details>
  );
}

function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 0 0 18M12 3a15 15 0 0 1 0 18" />
    </svg>
  );
}

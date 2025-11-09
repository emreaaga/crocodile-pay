"use client";

import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function LanguageSwitcher() {
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
      e.preventDefault();
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <details className="group relative">
      <summary
        className="flex cursor-pointer select-none items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
        aria-label="Выбрать язык"
      >
        {locale.toUpperCase()}
        <svg
          className="h-3 w-3 text-slate-500 transition group-open:rotate-180"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path
            d="M2 4l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
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
              shake && code === locale && "animate-shake",
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </details>
  );
}

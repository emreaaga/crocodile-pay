"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export const MobileNav = () => {
  const t = useTranslations("MobileNav"); // берём переводы из messages

  const routes = [
    { href: "/pricing", label: t("pricing") },
    { href: "/sign-in", label: t("signIn") },
    { href: "/sign-up", label: t("signUp") },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="sm:hidden pr-4">
          <Menu className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 bg-white shadow-md rounded-md"
      >
        {routes.map((r) => (
          <DropdownMenuItem key={r.href} asChild>
            <Link
              href={r.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "w-full justify-start"
              )}
            >
              {r.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

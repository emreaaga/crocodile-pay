"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type OnboardingDialogProps = {
  label: string; // текст кнопки (например, t("hero.cta.primary"))
};

export function OnboardingDialog({ label }: OnboardingDialogProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Onboarding");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          buttonVariants({ size: "lg", className: "mt-0 rounded-xl" }),
          "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm transition " +
            "hover:shadow-md hover:opacity-95 focus-visible:outline-none " +
            "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        )}
      >
        {label}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>

        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">{t("fields.name.label")}</Label>
            <Input id="name" placeholder={t("fields.name.placeholder")} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="site">{t("fields.site.label")}</Label>
            <Input id="site" placeholder={t("fields.site.placeholder")} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">{t("fields.email.label")}</Label>
            <Input id="email" type="email" placeholder={t("fields.email.placeholder")} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">{t("fields.phone.label")}</Label>
            <Input id="phone" type="tel" placeholder={t("fields.phone.placeholder")} />
          </div>

          <button
            type="submit"
            className={cn(
              buttonVariants({ size: "lg", className: "mt-4 w-full rounded-xl" }),
              "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white"
            )}
          >
            {t("submit")}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

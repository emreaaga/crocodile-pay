"use client";

import { Input } from "@/components/atoms/ui/input";
import { Label } from "@/components/atoms/ui/label";
import { buttonVariants } from "@/components/atoms/ui/button";
import { cn } from "@/lib/utils";

interface OnboardingFormProps {
  t: (key: string) => string;
  formData: {
    name: string;
    siteUrl: string;
    email: string;
    phoneNumber: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function OnboardingForm({
  t,
  formData,
  setFormData,
  handleSubmit,
}: OnboardingFormProps) {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="name">{t("fields.name.label")}</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={t("fields.name.placeholder")}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="site">{t("fields.site.label")}</Label>
        <Input
          id="site"
          value={formData.siteUrl}
          onChange={(e) =>
            setFormData({ ...formData, siteUrl: e.target.value })
          }
          placeholder={t("fields.site.placeholder")}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">{t("fields.email.label")}</Label>
        <Input
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          placeholder={t("fields.email.placeholder")}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">{t("fields.phone.label")}</Label>
        <Input
          id="phone"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          type="tel"
          placeholder={t("fields.phone.placeholder")}
        />
      </div>

      <button
        type="submit"
        className={cn(
          buttonVariants({
            size: "lg",
            className: "mt-4 w-full rounded-xl",
          }),
          "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white",
        )}
      >
        {t("submit")}
      </button>
    </form>
  );
}

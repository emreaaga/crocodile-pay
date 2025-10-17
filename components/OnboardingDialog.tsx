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
import { toast } from "sonner";
import { api } from "@/lib/axios";

type OnboardingDialogProps = {
  label: string; 
};

export function OnboardingDialog({ label }: OnboardingDialogProps) {
  const t = useTranslations("Onboarding");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    siteUrl: '',
    email: '',
    phoneNumber: '',
  });
  

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post( '/application',
        {
          name: formData.name, siteUrl: formData.siteUrl,
          email: formData.email,
          phoneNumber: formData.phoneNumber
        });
        setFormData({name: "" , siteUrl: "", email: "", phoneNumber: ""});
        setOpen(false);
        toast.success(t('successMessage'));
    } catch (error: any) {
      setOpen(false);
      setFormData({name: "" , siteUrl: "", email: "", phoneNumber: ""});
      toast.info(t("infoMessage"));
    }
  }

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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">{t("fields.name.label")}</Label>
            <Input id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder={t("fields.name.placeholder")} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="site">{t("fields.site.label")}</Label>
            <Input id="site" value={formData.siteUrl} onChange={(e) => setFormData({...formData, siteUrl: e.target.value})} placeholder={t("fields.site.placeholder")} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">{t("fields.email.label")}</Label>
            <Input id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder={t("fields.email.placeholder")} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">{t("fields.phone.label")}</Label>
            <Input id="phone" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} type="tel" placeholder={t("fields.phone.placeholder")} />
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

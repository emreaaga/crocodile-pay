"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/ui/dialog";
import { buttonVariants } from "@/components/atoms/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { api } from "@/lib/axios";
import OnboardingForm from "@/components/organisms/forms/OnboardingForm";

type OnboardingDialogProps = { label: string };

export function OnboardingDialog({ label }: OnboardingDialogProps) {
  const t = useTranslations("Onboarding");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    siteUrl: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/application", {
        name: formData.name,
        siteUrl: formData.siteUrl,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      });
      setFormData({ name: "", siteUrl: "", email: "", phoneNumber: "" });
      setOpen(false);
      toast.success(t("successMessage"));
    } catch (error: any) {
      setOpen(false);
      setFormData({ name: "", siteUrl: "", email: "", phoneNumber: "" });
      toast.info(t("infoMessage"));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          buttonVariants({ size: "lg", className: "mt-0 rounded-xl" }),
          "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm transition " +
            "hover:opacity-95 hover:shadow-md focus-visible:outline-none " +
            "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
        )}
      >
        {label}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>

        <OnboardingForm
          t={t}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}

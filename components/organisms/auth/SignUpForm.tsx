"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/atoms/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import AuthInputGroup from "@/components/molecules/AuthInputGroup";

export default function SignUpForm() {
  const t = useTranslations("Auth");
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const inputFields = [
    {
      id: "name",
      label: t("name"),
      Icon: User,
      type: "text",
      placeholder: t("namePlaceHolder"),
      autoComplete: "name",
      key: "name",
    },
    {
      id: "email",
      label: t("email"),
      Icon: Mail,
      type: "email",
      placeholder: "you@example.com",
      autoComplete: "email",
      key: "email",
    },
    {
      id: "repeatPassword",
      label: t("confirmPassword"),
      Icon: Lock,
      type: "password",
      placeholder: "••••••••",
      autoComplete: "new-password",
      key: "repeatPassword",
    },
    {
      id: "password",
      label: t("password"),
      Icon: Lock,
      type: "password",
      placeholder: "••••••••",
      autoComplete: "new-password",
      key: "password",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registerData.password !== registerData.repeatPassword) {
      toast.error(t("errorPasswords"));
      return;
    }

    try {
      await api.post("/auth/register", {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
      });
      setRegisterData({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
      toast.success(t("successRegister"));
    } catch (error: any) {
      if (error.response?.data?.code === "EMAIL_EXISTS") {
        toast.info(t("alreadyRegistered"));
      } else if (error.response?.data?.code === "VALIDATION_ERROR") {
        toast.error(error.response.data.message);
      } else {
        toast.error(t("somethingWentWrong"));
      }
    }
  };

  return (
    <div className="w-full max-w-md rounded-xl border bg-white/80 p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl">
      <h1 className="text-center text-2xl font-bold">{t("signUp.title")}</h1>
      <p className="mb-6 text-center text-sm text-gray-600">
        {t("signUp.subtitle")}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {inputFields.map((item) => (
          <AuthInputGroup
            key={item.id}
            id={item.id}
            label={item.label}
            Icon={item.Icon}
            type={item.type}
            placeholder={item.placeholder}
            autoComplete={item.autoComplete}
            value={registerData[item.key as keyof typeof registerData]}
            onChange={(e) =>
              setRegisterData({ ...registerData, [item.key]: e.target.value })
            }
          />
        ))}

        <button
          type="submit"
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full rounded-md bg-emerald-600 text-white hover:bg-emerald-700",
          )}
        >
          {t("signUp.button")}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        {t("signUp.haveAccount")}{" "}
        <Link
          href="/sign-in"
          className="font-medium text-emerald-600 hover:underline"
        >
          {t("signIn.title")}
        </Link>
      </p>

      <p className="mt-4 text-center text-xs text-gray-400">
        🔒 {t("secureNote")}
      </p>
    </div>
  );
}

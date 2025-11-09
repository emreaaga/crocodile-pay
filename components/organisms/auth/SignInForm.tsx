"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/atoms/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/axios";
import AuthInputGroup from "@/components/molecules/AuthInputGroup";

export default function SignInForm() {
  const t = useTranslations("Auth");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const inputFields = [
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
      id: "password",
      label: t("password"),
      Icon: Lock,
      type: "password",
      placeholder: "••••••••",
      autoComplete: "current-password",
      key: "password",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/auth/login", {
        email: loginData.email,
        password: loginData.password,
      });
      setLoginData({ email: "", password: "" });
    } catch (error: any) {
      if (error.response?.data?.code === "VALIDATION_ERROR") {
        toast.error(error.response.data.message);
      } else if (error.response?.data?.code === "INVALID_CREDENTIALS") {
        toast.error(t("invalidCredentials"));
      } else if (
        error.response?.data?.status === "PENDING" ||
        error.response?.data?.status === "REJECTED"
      ) {
        toast.info(t("waitForApproval"));
      }
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-md rounded-xl border bg-white/80 p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl">
      <h1 className="text-center text-2xl font-bold">{t("signIn.title")}</h1>
      <p className="mb-6 text-center text-sm text-gray-600">
        {t("signIn.subtitle")}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {inputFields.map((item) => (
          <div key={item.id}>
            <AuthInputGroup
              id={item.id}
              label={item.label}
              Icon={item.Icon}
              type={item.type}
              placeholder={item.placeholder}
              autoComplete={item.autoComplete}
              value={loginData[item.key as keyof typeof loginData]}
              onChange={(e) =>
                setLoginData({ ...loginData, [item.key]: e.target.value })
              }
            />
            {item.id === "password" && (
              <div className="mt-1 text-right">
                <Link
                  href="/sign-in"
                  className="text-xs text-emerald-600 hover:underline"
                >
                  {t("forgotPassword")}
                </Link>
              </div>
            )}
          </div>
        ))}

        <button
          type="submit"
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full rounded-md bg-emerald-600 text-white hover:bg-emerald-700",
          )}
        >
          {t("signIn.button")}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        {t("signIn.noAccount")}{" "}
        <Link
          href="/sign-up"
          className="font-medium text-emerald-600 hover:underline"
        >
          {t("signUp.title")}
        </Link>
      </p>

      <p className="mt-4 text-center text-xs text-gray-400">
        🔒 {t("secureNote")}
      </p>
    </div>
  );
}

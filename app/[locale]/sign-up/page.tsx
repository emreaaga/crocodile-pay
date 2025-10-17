"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";

export default function SignUpPage() {
  const t = useTranslations("Auth");
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    if (registerData.password !== registerData.repeatPassword) {
      toast.error(t('errorPasswords') );
      return;
    }

    try {
      await api.post('/auth/register', {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password
        });
      setRegisterData({name: "", email: "", password: "", repeatPassword: ""});
      toast.success(t('successRegister'));
    } catch (error: any) {
      if (error.response?.data?.code === "EMAIL_EXISTS") {
        toast.info(t("alreadyRegistered"));
      } else if (error.response?.data?.code === 'VALIDATION_ERROR') {
        toast.error(error.response.data.message);
      } else {
        toast.error(t('somethingWentWrong'));
      }
    };
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center text-sm text-emerald-700 hover:text-emerald-900"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        {t("back")}
      </Link>

      <div className="w-full max-w-md rounded-xl border bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition">
        <h1 className="text-2xl font-bold text-center">{t("signUp.title")}</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          {t("signUp.subtitle")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("name")}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={registerData.name}
                onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                placeholder={t('namePlaceHolder')}
                autoComplete="name"
                className="pl-9 mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("email")}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                value={registerData.email}
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="pl-9 mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("password")}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="password"
                value={registerData.repeatPassword}
                onChange={(e) => setRegisterData({...registerData, repeatPassword: e.target.value})}
                placeholder="••••••••"
                autoComplete="new-password"
                className="pl-9 mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("confirmPassword")}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="password"
                value={registerData.password}
                onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                placeholder="••••••••"
                autoComplete="new-password"
                className="pl-9 mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full bg-emerald-600 text-white hover:bg-emerald-700 rounded-md"
            )}
          >
            {t("signUp.button")}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
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
    </div>
  );
}

"use client";

import AuthLayout from "@/components/templates/AuthLayout";
import SignInForm from "@/components/organisms/auth/SignInForm";

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}

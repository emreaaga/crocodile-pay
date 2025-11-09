"use client";

import AuthLayout from "@/components/templates/AuthLayout";
import SignUpForm from "@/components/organisms/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}

import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import { OnboardingDialog } from "@/components/molecules/OnboardingDialog";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/atoms/ui/button";
import { useTranslations } from "next-intl";
import Section from "@/components/atoms/Section";

export default function HeroSection() {
  const t = useTranslations("Home");

  return (
    <Section className="pt-12 sm:pt-16">
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
            {t("hero.badge")}
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          {t("hero.title")}
        </h1>

        <p className="mt-5 max-w-prose text-lg text-slate-600 sm:text-2xl">
          {t("hero.desc")}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <OnboardingDialog label={t("hero.cta.primary")} />
          <Link
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
                className: "mt-0 rounded-xl",
              }),
              "border-emerald-300 text-emerald-700 hover:bg-emerald-50 " +
                "focus-visible:outline-none focus-visible:ring-2 " +
                "focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
            )}
            href="/sign-in"
            aria-label={t("hero.cta.secondary")}
          >
            {t("hero.cta.secondary")}
          </Link>
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}

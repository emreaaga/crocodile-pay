import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import { OnboardingDialog } from "@/components/molecules/OnboardingDialog";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/atoms/ui/button";
import { useTranslations } from "next-intl";
import Section from "@/components/atoms/Section";

export default function CtaSection() {
  const t = useTranslations("Home");

  return (
    <Section id="cta" className="pt-0">
      <MaxWidthWrapper>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-white p-8 text-center shadow-sm sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-10"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 30%, #10b981 0%, rgba(16,185,129,0) 60%)",
            }}
          />
          <h3 className="text-2xl font-semibold">{t("cta.title")}</h3>
          <p className="mt-3 text-slate-600">{t("cta.desc")}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <OnboardingDialog label={t("hero.cta.primary")} />

            <Link
              href="/docs"
              aria-label={t("cta.cta.secondary")}
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "rounded-xl",
                }),
                "border-emerald-300 text-emerald-700 hover:bg-emerald-50 " +
                  "focus-visible:outline-none focus-visible:ring-2 " +
                  "focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
              )}
            >
              {t("cta.cta.secondary")}
            </Link>
          </div>

          <p className="mt-3 text-xs text-zinc-500">{t("cta.note")}</p>
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}

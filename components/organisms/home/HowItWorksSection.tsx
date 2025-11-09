import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import { useTranslations } from "next-intl";
import Section from "@/components/atoms/Section";

export default function HowItWorksSection() {
  const t = useTranslations('Home');

  return (
    <Section id="how-it-works">
          <MaxWidthWrapper>
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                  {t("how.title")}
                </h2>
                <p className="mt-4 text-lg text-slate-600">{t("how.desc")}</p>
              </div>

              <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
                {["step1", "step2", "step3"].map((step, i) => (
                  <li key={i} className="md:flex-1">
                    <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                      <span className="text-sm font-medium text-emerald-700">
                        {t(`how.${step}.label`)}
                      </span>
                      <span className="text-xl font-semibold">
                        {t(`how.${step}.title`)}
                      </span>
                      <span className="mt-1 text-slate-600">
                        {t(`how.${step}.desc`)}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </MaxWidthWrapper>
        </Section>
  )
}
import MaxWidthWrapper from "@/components/atoms/MaxWidthWrapper";
import { useTranslations } from "next-intl";
import Section from "@/components/atoms/Section";
import FeatureCard from "@/components/molecules/FeatureCard";
import IconZap from "@/components/atoms/icons/iconZap";
import IconCard from "@/components/atoms/icons/iconCard";
import IconShield from "@/components/atoms/icons/iconShield";
import IconHeadset from "@/components/atoms/icons/iconHeadset";

export default function BenefitSection() {
  const t = useTranslations("Home");

  return (
    <Section id="benefits">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              {t("benefits.title")}
            </h2>
            <p className="mt-4 text-lg text-slate-600">{t("benefits.desc")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title={t("benefits.items.fast.title")}
              desc={t("benefits.items.fast.desc")}
              icon={<IconZap className="h-7 w-7" />}
            />
            <FeatureCard
              title={t("benefits.items.methods.title")}
              desc={t("benefits.items.methods.desc")}
              icon={<IconCard className="h-7 w-7" />}
            />
            <FeatureCard
              title={t("benefits.items.secure.title")}
              desc={t("benefits.items.secure.desc")}
              icon={<IconShield className="h-7 w-7" />}
            />
            <FeatureCard
              title={t("benefits.items.support.title")}
              desc={t("benefits.items.support.desc")}
              icon={<IconHeadset className="h-7 w-7" />}
            />
          </div>

          <p className="mt-3 text-center text-xs text-zinc-500">
            {t("benefits.note")}
          </p>
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import IconZap from "@/components/icons/iconZap";
import IconCard from "@/components/icons/iconCard";
import IconShield from "@/components/icons/iconShield";
import IconHeadset from "@/components/icons/iconHeadset";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Вместо space-y — управляемое Section с py-отступами */}
      <main>
        {/* Hero */}
        <Section className="pt-12 sm:pt-16">
          <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                Платежная платформа с «хваткой» конверсии
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Онлайн-платежи для вашего бизнеса
            </h1>

            <p className="mt-5 max-w-prose text-lg text-slate-600 sm:text-2xl">
              Карты, кошельки, переводы и QR. Быстро, безопасно, с понятной интеграцией.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {/* Primary: emerald → teal градиент */}
              <Link
                className={cn(
                  buttonVariants({ size: "lg", className: "mt-0 rounded-xl" }),
                  "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm transition " +
                  "hover:shadow-md hover:opacity-95 focus-visible:outline-none " +
                  "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                )}
                href="/onboarding"
                aria-label="Подключить бизнес"
              >
                Подключить бизнес
              </Link>

              {/* Outline: изумрудный бордер/текст + лёгкий hover */}
              <Link
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline", className: "mt-0 rounded-xl" }),
                  "border-emerald-300 text-emerald-700 hover:bg-emerald-50 " +
                  "focus-visible:outline-none focus-visible:ring-2 " +
                  "focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                )}
                href="/dashboard"
                aria-label="Войти в кабинет"
              >
                Войти в кабинет
              </Link>
            </div>

          </MaxWidthWrapper>
        </Section>

        {/* How it works */}
        <Section id="how-it-works">
          <MaxWidthWrapper>
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Как мы работаем</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Оставляете заявку, подключаете нужные методы и начинаете принимать деньги на сайте или в приложении.
                </p>
              </div>

              <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
                <li className="md:flex-1">
                  <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-emerald-700">Шаг 1</span>
                    <span className="text-xl font-semibold">Заявка и верификация</span>
                    <span className="mt-1 text-slate-600">
                      Заполняете короткую анкету: данные компании и домен. Мы быстро проверяем.
                    </span>
                  </div>
                </li>
                <li className="md:flex-1">
                  <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-emerald-700">Шаг 2</span>
                    <span className="text-xl font-semibold">Подключение оплат</span>
                    <span className="mt-1 text-slate-600">
                      Включаем карты, кошельки, переводы и QR. Выбираете, что нужно именно вам.
                    </span>
                  </div>
                </li>
                <li className="md:flex-1">
                  <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-emerald-700">Шаг 3</span>
                    <span className="text-xl font-semibold">Первые платежи</span>
                    <span className="mt-1 text-slate-600">
                      Получаете оплату и видите выручку в реальном времени — в кабинете и по API.
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </MaxWidthWrapper>
        </Section>

        {/* Benefits */}
        <Section id="benefits">
          <MaxWidthWrapper>
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Что вы получаете</h2>
                <p className="mt-4 text-lg text-slate-600">Убираем лишние шаги — вы запускаете продажи быстрее.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <FeatureCard
                  title="Быстрый старт"
                  desc="Часто подключаем в день заявки*"
                  icon={<IconZap className="h-7 w-7" />}
                />
                <FeatureCard
                  title="Все методы оплаты"
                  desc="Карты, кошельки, переводы и QR"
                  icon={<IconCard className="h-7 w-7" />}
                />
                <FeatureCard
                  title="Безопасность"
                  desc="Шифрование, антифрод, 3DS 2.x"
                  icon={<IconShield className="h-7 w-7" />}
                />
                <FeatureCard
                  title="Поддержка 24/7"
                  desc="Отвечаем быстро, помогаем с интеграцией"
                  icon={<IconHeadset className="h-7 w-7" />}
                />
              </div>

              <p className="mt-3 text-center text-xs text-zinc-500">
                *Сроки могут отличаться в зависимости от проверки и юрисдикции.
              </p>
            </div>
          </MaxWidthWrapper>
        </Section>

        {/* CTA Footer */}
        <Section id="cta" className="pt-0">
          <MaxWidthWrapper>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-white p-8 text-center shadow-sm sm:p-12">
              {/* лёгкий фон-акцент */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-10"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 30%, #10b981 0%, rgba(16,185,129,0) 60%)",
                }}
              />
              <h3 className="text-2xl font-semibold">Готовы принимать платежи?</h3>
              <p className="mt-3 text-slate-600">
                Оставьте заявку — подключим нужные методы и запустим приём оплат.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {/* Primary */}
                <Link
                  href="/onboarding"
                  aria-label="Отправить заявку"
                  className={cn(
                    buttonVariants({ size: "lg", className: "rounded-xl" }),
                    "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm " +
                    "hover:shadow-md hover:opacity-95 focus-visible:outline-none " +
                    "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  )}
                >
                  Отправить заявку
                </Link>

                {/* Outline */}
                <Link
                  href="/docs"
                  aria-label="Документация API"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline", className: "rounded-xl" }),
                    "border-emerald-300 text-emerald-700 hover:bg-emerald-50 " +
                    "focus-visible:outline-none focus-visible:ring-2 " +
                    "focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  )}
                >
                  Документация API
                </Link>
              </div>

              <p className="mt-3 text-xs text-zinc-500">
                *Сроки зависят от проверки и юрисдикции.
              </p>
            </div>
          </MaxWidthWrapper>
        </Section>

      </main>

      <Footer />
    </>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  // Базовые отступы между секциями
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      {children}
    </section>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <Card
      className="group relative flex h-full flex-col items-center rounded-2xl
                 border border-zinc-200 bg-white p-6 text-center shadow-sm
                 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-inset ring-emerald-200 text-emerald-700">
        {icon}
      </div>
      <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
      <CardDescription className="mt-2 min-h-[3.25rem] text-slate-600">{desc}</CardDescription>
    </Card>
  );
}

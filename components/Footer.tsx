import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const nav: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Продукт",
      links: [
        { label: "Тарифы", href: "/pricing" },
        { label: "Методы оплаты", href: "/#benefits" },
        { label: "Безопасность", href: "/#security" },
        { label: "Интеграции", href: "/docs" },
      ],
    },
    {
      title: "Разработчикам",
      links: [
        { label: "Документация API", href: "/docs" },
        { label: "Примеры кода", href: "/docs#examples" },
        { label: "Статус", href: "/status" },
        { label: "Webhooks", href: "/docs#webhooks" },
      ],
    },
    {
      title: "Компания",
      links: [
        { label: "О нас", href: "/about" },
        { label: "Контакты", href: "/contacts" },
        { label: "Вакансии", href: "/jobs" },
        { label: "Блог", href: "/blog" },
      ],
    },
    {
      title: "Правовое",
      links: [
        { label: "Условия использования", href: "/legal/terms" },
        { label: "Политика конфиденциальности", href: "/legal/privacy" },
        { label: "KYC/AML", href: "/legal/aml" },
        { label: "Политика возвратов", href: "/legal/refunds" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* тонкий градиент сверху — фирменный штрих */}
      <div className="h-px w-full bg-gradient-to-r from-emerald-400/25 via-emerald-500/50 to-emerald-400/25" />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Бренд + описание + соцсети */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <CrocoMark className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-semibold tracking-tight">
                Crocodile<span className="text-emerald-700">Pay</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Онлайн-платежи для бизнеса: карты, кошельки, переводы и QR.
              Быстро, безопасно и с понятной интеграцией.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <SocialIcon href="https://t.me/" title="Telegram">
                <IconTelegram className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://x.com/" title="X (Twitter)">
                <IconX className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://github.com/" title="GitHub">
                <IconGithub className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/" title="LinkedIn">
                <IconLinkedIn className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>

          {/* Навигация колонками */}
          {nav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="text-sm font-semibold text-slate-900">{col.title}</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-slate-600 transition hover:text-slate-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Низ футера */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {year} CrocodilePay. Все права защищены.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>PCI&nbsp;DSS</Badge>
            <Badge>3DS&nbsp;2.x</Badge>
            <Badge>SLA&nbsp;99.95%</Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* === Мини-примитивы и иконки без библиотек === */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
      {children}
    </span>
  );
}

function SocialIcon({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={href}
        title={title}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      aria-label={title}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}

function CrocoMark({ className = "h-6 w-6 text-emerald-600" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M4 22c1-5 7-9 18-9h4l3-3 3 1-3 3 3 3-3 1-3-3h-4C11 15 7 17 6 24"
        fill="currentColor"
        opacity=".9"
      />
      <circle cx="22" cy="12" r="1.4" fill="#0b1220" />
    </svg>
  );
}

function IconTelegram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.6" d="M22 3 2 11l6.6 2.3M22 3l-6 18-4.4-7.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.1 3H21l-8.2 9.3L21.6 21h-3.9l-6.3-7.1L7 21H3l8.8-9.9L3.5 3H7l5.8 6.6L18.1 3z" />
    </svg>
  );
}
function IconGithub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7-1 .7-1-.9-.2-1.8-.5-1.8-2.3 0-.5.2-.9.5-1.3-.1-.2-.2-.9 0-1.8 0 0 .8-.3 2.6 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.8-1.3 2.6-1 2.6-1 .2.9.1 1.6 0 1.8.4.4.5.8.5 1.3 0 1.8-.9 2.1-1.8 2.3 0 0-.2 1.1.7 1 0 0 .6 1 1.7.9 1.9-.1 3.8-1.8 3.8-4.6A8 8 0 0 0 12 .5z" />
    </svg>
  );
}
function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.09.88 1.98 1.98 1.98a1.98 1.98 0 1 0 0-3.96zM3.5 8h3v12h-3V8zm6 0h2.9v1.6h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8V20h-3v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V20h-3V8z" />
    </svg>
  );
}

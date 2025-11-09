import { Card, CardDescription, CardTitle } from "@/components/atoms/ui/card";

type FeatureCardProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export default function FeatureCard({ title, desc, icon }: FeatureCardProps) {
  return (
    <Card
      className="group relative flex h-full flex-col items-center rounded-2xl
                 border border-zinc-200 bg-white p-6 text-center shadow-sm
                 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200">
        {icon}
      </div>
      <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
      <CardDescription className="mt-2 min-h-[3.25rem] text-slate-600">
        {desc}
      </CardDescription>
    </Card>
  );
}

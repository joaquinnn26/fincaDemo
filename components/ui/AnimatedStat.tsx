type AnimatedStatProps = {
  value: string;
  label: string;
  suffix?: string;
};

export function AnimatedStat({ value, label, suffix }: AnimatedStatProps) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur">
      <p className="font-serif text-3xl text-ink">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ink/70">{label}</p>
      {suffix ? <p className="mt-1 text-sm text-olive">{suffix}</p> : null}
    </div>
  );
}

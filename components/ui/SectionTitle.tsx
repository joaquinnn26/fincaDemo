type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ eyebrow, title, description, align = 'left' }: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-olive">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-ink/70">{description}</p> : null}
    </div>
  );
}

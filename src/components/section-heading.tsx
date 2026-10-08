type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

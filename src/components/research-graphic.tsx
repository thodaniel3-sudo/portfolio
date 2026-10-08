export function ResearchGraphic() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,214,197,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(126,180,255,0.18),transparent_35%)]" />
      <div className="relative grid min-h-[330px] gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.4)] p-5">
          <div className="mb-5 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            <span>Materials Informatics</span>
            <span>Predictive Models</span>
          </div>
          <div className="grid h-[190px] place-items-center">
            <div className="relative h-[170px] w-full rounded-2xl border border-[var(--border)] bg-[linear-gradient(135deg,rgba(126,180,255,0.08),rgba(138,214,197,0.08))]">
              <div className="absolute left-6 top-8 h-20 w-20 rounded-full border border-[var(--border)] bg-[rgba(126,180,255,0.09)]" />
              <div className="absolute right-12 top-12 h-24 w-24 rounded-full border border-[var(--border)] bg-[rgba(138,214,197,0.09)]" />
              <div className="absolute bottom-7 left-1/2 h-20 w-[55%] -translate-x-1/2 rounded-full border border-[var(--border)] bg-[rgba(15,23,42,0.5)]" />
              <div className="absolute left-1/2 top-1/2 h-[1px] w-[72%] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(138,214,197,0.75),transparent)]" />
              <div className="absolute left-[22%] top-[28%] h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(138,214,197,0.9)]" />
              <div className="absolute left-[48%] top-[42%] h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(138,214,197,0.9)]" />
              <div className="absolute left-[68%] top-[58%] h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(138,214,197,0.9)]" />
              <div className="absolute left-[37%] top-[62%] h-2 w-2 rounded-full bg-[var(--accent-2)] shadow-[0_0_16px_rgba(126,180,255,0.9)]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.4)] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Interest Areas
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--muted-strong)]">
              {[
                "Materials",
                "Composites",
                "AI",
                "Sustainability",
                "Data",
                "Modeling",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[rgba(126,180,255,0.06)] px-2.5 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.4)] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Research Lens
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>• Computational materials analysis</li>
              <li>• Machine learning-informed design</li>
              <li>• Sustainable engineering systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

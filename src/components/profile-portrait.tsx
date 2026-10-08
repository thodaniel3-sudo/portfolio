import Image from "next/image";

export function ProfilePortrait({ hasImage }: { hasImage: boolean }) {
  if (hasImage) {
    return (
      <div className="relative mx-auto w-full max-w-[430px]">
        <div className="absolute inset-6 rounded-[28px] border border-[var(--border)] bg-[radial-gradient(circle_at_top,_rgba(126,180,255,0.15),transparent_52%)]" />
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow)]">
          <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(20,29,40,0.75),rgba(12,16,22,0.9))]">
            <Image
              src="/images/profile.jpg"
              alt="Portrait placeholder for Daniel Thomas"
              width={900}
              height={1100}
              priority
              className="h-[460px] w-full object-cover md:h-[560px]"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="absolute inset-10 rounded-[32px] border border-[var(--border)] bg-[radial-gradient(circle,_rgba(138,214,197,0.18),transparent_60%)]" />
      <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
        <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[24px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(14,19,30,0.96),rgba(11,14,21,0.96))] px-8 py-10 text-center">
          <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-[var(--border)] bg-[radial-gradient(circle_at_center,_rgba(126,180,255,0.24),rgba(15,23,42,0.7))] text-[var(--text)] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <span className="text-4xl font-semibold tracking-[0.14em]">DT</span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Portrait Placeholder
          </p>
          <h3 className="mt-5 text-2xl font-semibold text-[var(--text)]">Daniel Thomas</h3>
          <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">
            Add a professional portrait at /public/images/profile.jpg when available.
          </p>
        </div>
      </div>
    </div>
  );
}

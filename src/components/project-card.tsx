import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";

import type { Project } from "@/data/portfolio";

const visualStyles: Record<Project["visual"], string> = {
  lattice:
    "bg-[radial-gradient(circle_at_center,_rgba(138,214,197,0.18),transparent_52%),linear-gradient(135deg,rgba(17,24,39,0.92),rgba(8,14,20,0.98))]",
  network:
    "bg-[radial-gradient(circle_at_top_right,_rgba(126,180,255,0.18),transparent_40%),linear-gradient(135deg,rgba(13,18,28,0.95),rgba(7,11,18,0.98))]",
  materials:
    "bg-[radial-gradient(circle_at_bottom_left,_rgba(138,214,197,0.18),transparent_42%),linear-gradient(135deg,rgba(21,25,31,0.76),rgba(10,15,20,0.96))]",
  analysis:
    "bg-[radial-gradient(circle_at_left,_rgba(126,180,255,0.18),transparent_38%),linear-gradient(135deg,rgba(11,17,28,0.95),rgba(12,17,24,0.98))]",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(126,180,255,0.3)]">
      <div className={`relative h-52 overflow-hidden border-b border-[var(--border)] ${visualStyles[project.visual]}`}>
        <div className="absolute inset-0 opacity-70">
          {project.visual === "lattice" ? (
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
          ) : null}
          {project.visual === "network" ? (
            <div className="absolute inset-0">
              <div className="absolute left-10 top-8 h-28 w-28 rounded-full border border-[var(--border)] bg-[rgba(126,180,255,0.09)]" />
              <div className="absolute bottom-10 right-12 h-24 w-24 rounded-full border border-[var(--border)] bg-[rgba(138,214,197,0.09)]" />
              <div className="absolute left-1/2 top-1/2 h-[1px] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(126,180,255,0.8),transparent)]" />
              <div className="absolute left-[20%] top-[28%] h-2 w-2 rounded-full bg-[var(--accent)]" />
              <div className="absolute left-[52%] top-[48%] h-2 w-2 rounded-full bg-[var(--accent)]" />
              <div className="absolute left-[70%] top-[58%] h-2 w-2 rounded-full bg-[var(--accent-2)]" />
            </div>
          ) : null}
          {project.visual === "materials" ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-40 rounded-[28px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(126,180,255,0.12),rgba(138,214,197,0.04))] shadow-inner" />
              <div className="absolute h-32 w-40 rotate-12 rounded-[28px] border border-[var(--border)] bg-[rgba(138,214,197,0.06)]" />
            </div>
          ) : null}
          {project.visual === "analysis" ? (
            <div className="absolute inset-0 p-5">
              <div className="flex h-full items-end gap-2">
                {[38, 66, 54, 84, 72, 96].map((height, index) => (
                  <div
                    key={`${project.title}-${index}`}
                    className="w-full rounded-t-md bg-[linear-gradient(180deg,rgba(126,180,255,0.8),rgba(138,214,197,0.5))]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-[var(--border)] bg-[rgba(7,11,18,0.72)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          {project.number}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-[var(--text)]">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[var(--border)] bg-[rgba(126,180,255,0.06)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--muted-strong)]"
            >
              {technology}
            </span>
          ))}
        </div>

        {project.details ? <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{project.details}</p> : null}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
            >
              Live Project
              <ArrowUpRight size={16} />
            </Link>
          ) : null}

          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-transparent px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <GitBranch size={16} />
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

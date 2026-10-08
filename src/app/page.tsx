import fs from "node:fs";
import path from "node:path";

import { ArrowRight, BriefcaseBusiness, ExternalLink, GitBranch, GraduationCap, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { ProfilePortrait } from "@/components/profile-portrait";
import { ProjectCard } from "@/components/project-card";
import { ResearchGraphic } from "@/components/research-graphic";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { portfolio, siteUrl } from "@/data/portfolio";

const hasProfileImage = fs.existsSync(path.join(process.cwd(), "public", "images", "profile.jpg"));
const hasCvFile = fs.existsSync(path.join(process.cwd(), "public", "cv", "Daniel-Thomas-CV.pdf"));

const contactLinks = [
  {
    label: "Email",
    href: portfolio.contact.email ? `mailto:${portfolio.contact.email}` : undefined,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: portfolio.contact.linkedin || undefined,
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    href: portfolio.contact.github || undefined,
    icon: GitBranch,
  },
].filter((link) => Boolean(link.href));

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.name,
  jobTitle: portfolio.title,
  description: portfolio.metaDescription,
  alumniOf: "Federal University of Technology, Minna",
  url: siteUrl,
  sameAs: [portfolio.contact.linkedin, portfolio.contact.github].filter(Boolean),
  knowsAbout: portfolio.researchInterests,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        <SiteHeader />

        <main>
          <section id="home" className="section-shell pt-16 pb-20 md:pt-20 md:pb-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
                  Materials Engineering • AI • Software
                </div>

                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--text)] sm:text-5xl lg:text-6xl">
                  Materials & Metallurgical Engineer
                  <span className="mt-3 block text-[var(--muted)]">
                    Building at the Intersection of Materials Science, AI & Software
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                  {portfolio.intro}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    View My Projects
                    <ArrowRight size={16} />
                  </Link>

                  {hasCvFile ? (
                    <Link
                      href="/cv/Daniel-Thomas-CV.pdf"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      Download CV
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--muted)]">
                      CV placeholder ready at /cv/Daniel-Thomas-CV.pdf
                    </span>
                  )}

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    Contact Me
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
                    <MapPin size={14} />
                    Nigeria
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
                    <GraduationCap size={14} />
                    B.Eng. Graduate, 2026
                  </span>
                </div>
              </div>

              <div className="relative">
                <ProfilePortrait hasImage={hasProfileImage} />
              </div>
            </div>
          </section>

          <AnimatedSection id="about" className="section-shell py-20 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="About"
                  title="Engineering rigor paired with computational thinking."
                  description={portfolio.about}
                />
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
                  My interests include using computational and data-driven approaches to understand
                  materials, predict properties, improve engineering decisions, and develop sustainable
                  materials solutions. I am motivated by the overlap between scientific inquiry,
                  data-informed modeling, and practical software development.
                </p>
              </div>

              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  Academic Focus
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted-strong)]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
                    Materials and Metallurgical Engineering graduate
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
                    Federal University of Technology, Minna, Nigeria
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
                    CGPA: 4.33 / 5.00
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="skills" className="section-shell py-20 md:py-24">
            <SectionHeading
              eyebrow="Skills"
              title="Technical capabilities across materials, data, and software."
              description="A focused set of skills aligned with materials engineering, computational analysis, AI, and practical software development."
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {portfolio.skills.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--text)]">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border)] bg-[rgba(126,180,255,0.06)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[var(--muted-strong)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="projects" className="section-shell py-20 md:py-24">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work at the intersection of science, modeling, and software."
              description="A portfolio of applied engineering, data-driven materials work, and computational prototypes."
            />

            <div className="mt-12 grid gap-8 xl:grid-cols-2">
              {portfolio.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="research" className="section-shell py-20 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Research"
                  title="Research & Technical Interests"
                  description="Publications and research outputs will be added as they become available."
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  {portfolio.researchInterests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-[var(--border)] bg-[rgba(138,214,197,0.08)] px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--muted-strong)]"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <ResearchGraphic />
            </div>
          </AnimatedSection>

          <AnimatedSection id="education" className="section-shell py-20 md:py-24">
            <SectionHeading
              eyebrow="Education"
              title="Academic foundation in engineering and materials systems."
            />

            <div className="mt-12 rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] md:p-8">
              {portfolio.education.map((item) => (
                <div key={item.degree} className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(126,180,255,0.08)] text-[var(--accent)]">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-2xl font-semibold text-[var(--text)]">{item.degree}</h3>
                      <span className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-3 text-base text-[var(--muted-strong)]">{item.institution}</p>
                    <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
                      CGPA: {item.gpa}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.focus.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-[var(--border)] bg-[rgba(138,214,197,0.08)] px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-[var(--muted-strong)]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="experience" className="section-shell py-20 md:py-24">
            <SectionHeading
              eyebrow="Experience"
              title="Professional development and technical engagement."
              description="Professional experience and additional technical engagements will be added as they are finalized."
            />

            <div className="mt-12 rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(126,180,255,0.08)] text-[var(--accent)]">
                  <BriefcaseBusiness size={22} />
                </div>
                <p className="max-w-3xl text-lg leading-8 text-[var(--muted-strong)]">
                  {portfolio.experienceNote}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="contact" className="section-shell py-20 md:py-24">
            <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow)] md:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
                <div>
                  <SectionHeading
                    eyebrow="Contact"
                    title="Let&apos;s Build Something Meaningful"
                    description={portfolio.contactMessage}
                  />
                </div>

                <div className="space-y-3">
                  {contactLinks.length > 0 ? (
                    contactLinks.map((link) => {
                      const Icon = link.icon;

                      return (
                        <Link
                          key={link.label}
                          href={link.href as string}
                          target={link.href?.startsWith("http") ? "_blank" : undefined}
                          rel={link.href?.startsWith("http") ? "noreferrer" : undefined}
                          className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.3)] px-4 py-3 text-sm text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          <span className="flex items-center gap-3">
                            <Icon size={16} />
                            {link.label}
                          </span>
                          <ArrowRight size={16} />
                        </Link>
                      );
                    })
                  ) : (
                    <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[rgba(15,23,42,0.2)] p-4 text-sm text-[var(--muted)]">
                      Add your email, LinkedIn, and GitHub details in src/data/portfolio.ts.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

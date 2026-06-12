import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — AI, Venture, National Security` },
      { name: "description", content: profile.thesis.slice(0, 160) },
      { property: "og:title", content: profile.name },
      { property: "og:description", content: profile.thesis.slice(0, 160) },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const experience = [
  {
    period: "2025 — Present",
    role: "Building AI products",
    org: "Stealth / Stanford",
    description: "Shipping AI agents for ambiguous workflows. Engineering, design, and early go-to-market.",
    tags: ["AI", "Product"],
  },
  {
    period: "2024 — 2025",
    role: "Investment Partner (Student)",
    org: "Venture Capital Firm",
    description: "Sourced and diligenced early-stage deals across deep tech and defense. Authored multiple investment memos.",
    tags: ["Venture", "Deep Tech"],
  },
  {
    period: "Summer 2024",
    role: "Research Intern",
    org: "National Security Lab",
    description: "OSINT pipelines and applied ML for open-source intelligence triage.",
    tags: ["OSINT", "ML"],
  },
];

const projects = [
  {
    title: "Signal",
    blurb: "Agentic OSINT platform that turns scattered open-source signals into structured intelligence reports.",
    stack: ["TypeScript", "LLMs", "Postgres"],
    href: "#",
  },
  {
    title: "Grid",
    blurb: "Climate-data tool surfacing the bottlenecks slowing US transmission and clean energy interconnection.",
    stack: ["Python", "Next.js", "DuckDB"],
    href: "#",
  },
  {
    title: "Memo",
    blurb: "AI research workspace for investors — multi-source diligence, structured outputs, version history.",
    stack: ["React", "RAG", "Cloud"],
    href: "#",
  },
  {
    title: "Field Notes",
    blurb: "Personal writing engine for half-formed ideas on AI, geopolitics, and capital allocation.",
    stack: ["Astro", "MDX"],
    href: "#",
  },
];

const writing = [
  { title: "The defense tech thesis nobody is pricing in", date: "May 2026", href: "#" },
  { title: "Why the next OSINT platform will be agentic", date: "Mar 2026", href: "#" },
  { title: "Notes on building at the seam of policy and software", date: "Jan 2026", href: "#" },
];

const interests = [
  { label: "AI Agents", note: "Long-horizon, tool-using systems for ambiguous knowledge work." },
  { label: "Defense & National Security", note: "Reindustrialization, dual-use, and the new primes." },
  { label: "OSINT", note: "Turning open signal into structured situational awareness." },
  { label: "Climate & Energy", note: "Grid, nuclear, and the unsexy infrastructure of the transition." },
  { label: "Venture", note: "Early-stage backing of technical founders building hard things." },
  { label: "Markets & Macro", note: "How capital actually flows through the real economy." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader anchors />
      <main className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Hero */}
        <section className="pt-20 md:pt-28 pb-20 md:pb-28">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Stanford · CS & Economics · '26
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="text-[2.75rem] sm:text-6xl md:text-7xl font-semibold tracking-[-0.035em] leading-[1.02] max-w-4xl"
          >
            {profile.name}.
            <span className="block text-muted-foreground/70 font-normal">
              Building where AI, venture, national&nbsp;security & sustainability collide.
            </span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {profile.thesis}
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/85 transition-colors"
            >
              See what I'm building <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground ml-1">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
          </motion.div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="About" title="Operator-investor in training.">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="md:col-span-2">
              <p className="text-base leading-relaxed">
                {profile.shortBio} I gravitate toward problems where the technology is genuinely hard and
                the stakes — economic, geopolitical, environmental — are real. I care about durable
                companies, not narratives.
              </p>
              <p className="text-base leading-relaxed mt-4 text-muted-foreground">
                Today that means writing software, writing checks, and writing essays — usually in that
                order, often in the same week.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">Stats</div>
              <dl className="space-y-3 text-sm">
                <Stat k="Studying" v="CS · Economics" />
                <Stat k="Class of" v="2026" />
                <Stat k="Based in" v="Palo Alto" />
                <Stat k="Open to" v="Collaborators · Founders" />
              </dl>
            </Card>
          </div>
        </Section>

        {/* Experience timeline */}
        <Section id="experience" eyebrow="Experience" title="Recent work.">
          <div className="relative pl-6 md:pl-8 border-l border-border">
            {experience.map((e, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-[33px] md:-left-[41px] top-1.5 h-3 w-3 rounded-full bg-background border-2 border-foreground" />
                <div className="text-xs font-mono text-muted-foreground">{e.period}</div>
                <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
                  <span className="text-muted-foreground">· {e.org}</span>
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">{e.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-muted px-2.5 py-0.5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Projects" title="Things I've built.">
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_rgb(0_0_0/0.12)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-mono rounded-md bg-muted px-2 py-0.5 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        {/* Writing */}
        <Section id="writing" eyebrow="Writing" title="Thoughts in long form.">
          <Card padded={false}>
            <ul className="divide-y divide-border">
              {writing.map((w, i) => (
                <li key={i}>
                  <a
                    href={w.href}
                    className="group flex items-center justify-between gap-6 px-6 py-5 hover:bg-muted/60 transition-colors"
                  >
                    <span className="text-base font-medium tracking-tight group-hover:text-primary transition-colors">
                      {w.title}
                    </span>
                    <span className="shrink-0 flex items-center gap-3 text-xs font-mono text-muted-foreground">
                      {w.date}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* Now / interests */}
        <Section id="now" eyebrow="Now" title="What I'm thinking about.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {interests.map((it, i) => (
              <motion.div
                key={it.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="rounded-xl border border-border bg-card p-5 hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <div className="text-sm font-semibold tracking-tight">{it.label}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.note}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact CTA */}
        <Section id="contact" eyebrow="Contact" title="Let's talk." last>
          <div className="rounded-2xl border border-border bg-foreground text-background p-8 md:p-12 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
            <h3 className="relative text-2xl md:text-3xl font-semibold tracking-tight max-w-2xl">
              If you're building something hard in AI, defense, OSINT, or energy — or you just want to
              trade notes — my inbox is open.
            </h3>
            <div className="relative mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-medium hover:bg-background/85 transition-colors"
              >
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-2.5 text-sm font-medium hover:bg-background/10 transition-colors"
              >
                DM on X <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Section>

        <footer className="py-10 text-xs font-mono text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built in Palo Alto</span>
        </footer>
      </main>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  last,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${last ? "pb-16" : "pb-20 md:pb-24"}`}>
      <motion.div {...fadeUp} className="mb-8 md:mb-10">
        <div className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-3">{eyebrow}</div>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      </motion.div>
      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }}>
        {children}
      </motion.div>
    </section>
  );
}

function Card({
  children,
  className = "",
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-card ${padded ? "p-6 md:p-8" : ""} ${className}`}>
      {children}
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-medium tracking-tight text-right">{v}</dd>
    </div>
  );
}
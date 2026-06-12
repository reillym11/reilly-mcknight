import { Link } from "@tanstack/react-router";
import type { Section } from "@/data/sections";

export function SectionBlock({ section, last }: { section: Section; last?: boolean }) {
  return (
    <section className={`py-10 ${last ? "" : "border-b border-border"}`}>
      <h2 className="text-base mb-6">{section.title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        {section.paragraphs.map((p, i) =>
          typeof p === "string" ? (
            <p key={i}>{p}</p>
          ) : (
            <p key={i}>
              <span className="font-semibold">{p.lead}</span> {p.body}
            </p>
          )
        )}
        {section.link && (
          <p className="pt-2">
            <Link
              to={section.link.to}
              className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
            >
              {section.link.label}
            </Link>
            <span aria-hidden className="ml-1 text-foreground/60">›</span>
          </p>
        )}
      </div>
    </section>
  );
}
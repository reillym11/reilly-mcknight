import { isValidElement } from "react";
import { Link } from "@tanstack/react-router";
import type { Section } from "@/data/sections";

export function SectionBlock({ section, last }: { section: Section; last?: boolean }) {
  return (
    <section className={`py-10 ${last ? "" : "border-b border-border"}`}>
      <h2 className="text-base mb-6">{section.title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        {section.paragraphs.map((p, i) => {
          if (
            p &&
            typeof p === "object" &&
            !isValidElement(p) &&
            "body" in (p as object)
          ) {
            const entry = p as { lead?: string; body: React.ReactNode };
            return (
              <p key={i}>
                {entry.lead && <span className="font-semibold">{entry.lead}</span>}{" "}
                <span className="font-semibold">{entry.body}</span>
              </p>
            );
          }
          return <p key={i}>{p as React.ReactNode}</p>;
        })}
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
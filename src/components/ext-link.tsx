import type { ReactNode } from "react";

export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors"
    >
      {children}
      <span aria-hidden className="ml-0.5 text-foreground/60">↗</span>
    </a>
  );
}
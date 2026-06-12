import type { ReactNode } from "react";

export type Section = {
  number: string;
  title: string;
  paragraphs: Array<
    | ReactNode
    | {
        lead?: string;
        body: ReactNode;
      }
  >;
  link?: { label: string; to: string };
};

export const sections: Section[] = [
  {
    number: "01",
    title: "Building",
    paragraphs: [
      {
        lead: "June 2026 – Present:",
        body: (
          <>
            Building AI Agents @{" "}
            <a
              href="https://www.attention.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
            >
              Attention
            </a>
            .
          </>
        ),
      },
      "Placeholder sentence describing what I'm working on at Attention day-to-day.",
      {
        lead: "March 2026 – Present:",
        body: "Founding FDE @ Stealth.",
      },
      "Placeholder sentence describing the stealth project and what I'm building.",
    ],
  },
  {
    number: "02",
    title: "Investing",
    paragraphs: [
      {
        lead: "September 2024 – Present:",
        body: "Venture Fellow @ Xfund.",
      },
      "Placeholder sentence about what I'm focused on at Xfund and the kinds of founders I love meeting.",
    ],
  },
  {
    number: "03",
    title: "On Campus",
    paragraphs: [
      "What I'm up to at Stanford — classes I'm loving, clubs and groups I'm part of, and the people I keep learning from.",
    ],
    link: { label: "All adventures", to: "/adventures" },
  },
  {
    number: "04",
    title: "Sidequests",
    paragraphs: [
      "Detours, experiments, and trips that probably weren't on the plan. Usually fun, occasionally regrettable.",
    ],
    link: { label: "All writing", to: "/writing" },
  },
  {
    number: "05",
    title: "Tidbits",
    paragraphs: [
      "Books, essays, films, and other small things I keep coming back to. Recs always welcome.",
    ],
    link: { label: "All favorites", to: "/favorites" },
  },
];
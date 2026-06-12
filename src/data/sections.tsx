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
      {
        lead: "November 2024 – May 2025:",
        body: "Venture Scout @ Microsoft for Startups.",
      },
      "Placeholder sentence about my time scouting for Microsoft for Startups.",
    ],
  },
  {
    number: "03",
    title: "On Campus",
    paragraphs: [
      "What I'm up to at Stanford.",
    ],
    link: { label: "See more", to: "/adventures" },
  },
  {
    number: "04",
    title: "Sidequests",
    paragraphs: [
      {
        lead: "Winter 2026:",
        body: "AI Ethics & Policy @ Oxford.",
      },
      "Placeholder sentence about the Oxford term and what I took away from it.",
      {
        lead: "Summer 2025:",
        body: "Auckland FC & New Zealand.",
      },
      "Placeholder sentence about the summer in Auckland.",
    ],
    link: { label: "See more", to: "/writing" },
  },
  {
    number: "05",
    title: "Tidbits",
    paragraphs: [
      "Fun facts about me.",
    ],
    link: { label: "See more", to: "/favorites" },
  },
];
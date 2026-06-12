import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

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
          </>
        ),
      },
      "Placeholder sentence describing what I'm working on at Attention day-to-day.",
      {
        lead: "March 2026 – Present:",
        body: "Founding Forward Deployed Eng @ Stealth Startup",
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
        body: "Venture Fellow @ Xfund",
      },
      <>
        Worked with{" "}
        <a
          href="https://www.linkedin.com/in/brandonfarwell/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
        >
          Brandon Farwell
        </a>{" "}
        to back lateral-thinking student founders
      </>,
      {
        lead: "November 2024 – May 2025:",
        body: "Venture Scout @ Microsoft for Startups",
      },
      "Placeholder sentence about my time scouting for Microsoft for Startups.",
    ],
  },
  {
    number: "03",
    title: "On Campus",
    paragraphs: [
      <>
        <Link
          to="/adventures"
          className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
        >
          What I'm up to at Stanford
        </Link>
        <span aria-hidden className="ml-1 text-foreground/60">›</span>
      </>,
    ],
  },
  {
    number: "04",
    title: "Sidequests",
    paragraphs: [
      {
        lead: "Winter 2026:",
        body: "AI Ethics & Policy @ Oxford",
      },
      "Placeholder sentence about the Oxford term and what I took away from it.",
      {
        lead: "Summer 2025:",
        body: "Auckland FC & New Zealand",
      },
      "Placeholder sentence about the summer in Auckland.",
    ],
    link: { label: "See more", to: "/writing" },
  },
  {
    number: "05",
    title: "Tidbits",
    paragraphs: [
      <>
        <Link
          to="/favorites"
          className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
        >
          Fun facts about me
        </Link>
        <span aria-hidden className="ml-1 text-foreground/60">›</span>
      </>,
    ],
  },
];

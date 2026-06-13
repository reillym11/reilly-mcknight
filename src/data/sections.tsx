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
      "Forward Deployed Engineering. Automating sales workflows for leading GTM teams in tech.",
      {
        lead: "March 2026 – Present:",
        body: "Founding Forward Deployed Eng @ Stealth Startup",
      },
      <>
        Building in AI OSINT with a cracked team. Currently in{" "}
        <a
          href="https://www.diu.mil/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
        >
          Defense Innovation Unit
        </a>{" "}
        DISF-C Accelerator.
      </>,
    ],
  },
  {
    number: "02",
    title: "Investing",
    paragraphs: [
      {
        lead: "September 2024 – Present:",
        body: (
          <>
            Venture Fellow @{" "}
            <a
              href="https://www.xfund.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
            >
              Xfund
            </a>
          </>
        ),
      },
      <>
        Working with{" "}
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
        body: (
          <>
            Venture Scout @{" "}
            <a
              href="https://www.microsoft.com/en-us/startups"
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
            >
              Microsoft for Startups
            </a>
          </>
        ),
      },
      "Inaugural cohort of 6 six students.",
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
        <span aria-hidden className="ml-1 text-foreground/60">
          ›
        </span>
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
      <>
        <Link
          to="/writing"
          className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
        >
          See more
        </Link>
        <span aria-hidden className="ml-1 text-foreground/60">›</span>
      </>,
      {
        lead: "Summer 2025:",
        body: "Auckland FC & New Zealand",
      },
      <>
        <Link
          to="/auckland"
          className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
        >
          See more
        </Link>
        <span aria-hidden className="ml-1 text-foreground/60">›</span>
      </>,
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
          More about me and random things I love
        </Link>
        <span aria-hidden className="ml-1 text-foreground/60">
          ›
        </span>
      </>,
    ],
  },
];

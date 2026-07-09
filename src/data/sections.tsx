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
      "Forward Deployed Engineering. Automating workflows for leading enterprise GTM teams in tech.",
      {
        lead: "March 2026 – Present:",
        body: "Founding Forward Deployed Eng @ Stealth Startup",
      },
      <>
        Building in AI open-source intel. Currently in{" "}
        <a
          href="https://www.diu.mil/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
        >
          Defense Innovation Unit
        </a>{" "}
        Accelerator.
      </>,
    ],
  },
  {
    number: "02",
    title: "Investing",
    paragraphs: [
      {
        lead: "September 2024 – June 2026:",
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
        Worked with{" "}
        <a
          href="https://www.linkedin.com/in/brandonfarwell/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
        >
          Brandon Farwell
        </a>{" "}
        to back lateral-thinking student founders.
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
      "Inaugural cohort. Found outlier student builders to accelerate with cloud credits & support",
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
        body: (
          <>
            <a
              href="https://aucklandfc.co.nz/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
            >
              Auckland FC
            </a>{" "}
            & New Zealand
          </>
        ),
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
  },
  {
    number: "05",
    title: "Miscellaneous",
    paragraphs: [
      <>
        <Link
          to="/favorites"
          className="underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
        >
          More about me and things I love
        </Link>
        <span aria-hidden className="ml-1 text-foreground/60">
          ›
        </span>
      </>,
    ],
  },
];

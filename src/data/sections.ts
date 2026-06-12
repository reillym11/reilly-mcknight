export type Section = {
  number: string;
  title: string;
  paragraphs: Array<
    | string
    | {
        lead?: string;
        body: string;
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
        lead: "Month Year – Present:",
        body: "Current role description @ Company. One or two sentences on what you do day-to-day and what you're learning.",
      },
      {
        lead: "Month Year – Month Year:",
        body: "Previous role @ Company. What you worked on, who you worked with, and one memorable thing about the experience.",
      },
      {
        lead: "Other:",
        body: "Side commitments, advising, or anything else worth mentioning. Short and concrete.",
      },
    ],
  },
  {
    number: "02",
    title: "Investing",
    paragraphs: [
      "Notes on what I'm tracking in venture and markets — companies I'm spending time with, theses I'm forming, and the questions I haven't answered yet.",
    ],
    link: { label: "All projects", to: "/projects" },
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
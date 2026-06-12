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
    title: "Work",
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
    title: "Projects",
    paragraphs: [
      "Recently, I've been building a handful of small apps and experiments — mostly around [topic]. I'm still learning, but I hope you'll find something interesting.",
    ],
    link: { label: "All projects", to: "/projects" },
  },
  {
    number: "03",
    title: "Adventures",
    paragraphs: [
      "I sometimes get the urge to do something adventurous and potentially risky. It usually involves moving a long distance.",
    ],
    link: { label: "All adventures", to: "/adventures" },
  },
  {
    number: "04",
    title: "Writing",
    paragraphs: [
      "Every now and then, I have thoughts that warrant more than a tweet. I mostly write about tech, economics, and life.",
    ],
    link: { label: "All writing", to: "/writing" },
  },
  {
    number: "05",
    title: "Favorites",
    paragraphs: [
      "I keep track of my favorite books, blogs, movies, etc. If you have any recs please let me know!",
    ],
    link: { label: "All favorites", to: "/favorites" },
  },
];
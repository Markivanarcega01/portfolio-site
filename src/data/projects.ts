// Edit this file to manage your portfolio. Each entry renders as a card on the home page.
// Tip: put the resume-worthy numbers in `metrics` — they're displayed prominently.

export type Project = {
  /** Display name of the project. */
  title: string;
  /** One- or two-sentence summary of what it does and who it's for. */
  description: string;
  /** Live, deployed URL. Shown as the primary "Visit site" button. */
  liveUrl: string;
  /** Public source code URL. Omit if the repo is private. */
  repoUrl?: string;
  /** Tech used — rendered as tags. */
  stack: string[];
  /** Headline metrics that match your resume, e.g. { label: "Users", value: "1.2k" }. */
  metrics?: { label: string; value: string }[];
  /** Optional screenshot in /public (e.g. "/projects/myapp.png"). Falls back to a gradient. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Full-Stack Chat App",
    description:
      "A real-time chat application where users sign in and exchange messages. Built as a full TypeScript stack with a React client and an Express API.",
    liveUrl: "https://fullstack-chat-app-7pli.onrender.com/",
    repoUrl: "https://github.com/Markivanarcega01/fullstack-chat-app",
    stack: ["React", "TypeScript", "Node.js", "Express"],
    // metrics: [{ label: "Users", value: "" }], // add the numbers from your resume
  },
  {
    title: "Product Store",
    description:
      "A full-stack e-commerce store with full create, read, update, and delete management for products, backed by a React + Express app.",
    liveUrl: "https://product-store-gpog.onrender.com/",
    repoUrl: "https://github.com/Markivanarcega01/Product-store",
    stack: ["React", "TypeScript", "Node.js", "Express"],
    // metrics: [{ label: "Products", value: "" }], // add the numbers from your resume
  },
];

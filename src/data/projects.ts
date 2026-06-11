import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Web Dashboard App",
    description:
      "A responsive analytics dashboard built with React and Node.js for tracking data in real time.",
    icon: "dashboard",
    tags: ["React.js", "Node.js", "JavaScript"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-1",
    featured: true,
  },
  {
    id: "project-2",
    title: "Code Editor Platform",
    description:
      "An online coding environment with syntax highlighting, built using Next.js and TypeScript.",
    icon: "code",
    tags: ["Next.js", "TypeScript", "Express.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-2",
    featured: true,
  },
  {
    id: "project-3",
    title: "Mobile Learning App",
    description:
      "A cross-platform mobile app for students, developed with React Native and a Python backend.",
    icon: "mobile",
    tags: ["React Native", "Python", "Java"],
    repoUrl: "https://github.com/yourusername/project-3",
    featured: false,
  },
];

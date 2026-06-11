import type { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "React.js", category: "frontend" },
  { name: "React Native", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Java", category: "backend" },
  { name: "C++", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Android Studio", category: "tools" },
];

export const skillCategories = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Development Environment",
} as const;

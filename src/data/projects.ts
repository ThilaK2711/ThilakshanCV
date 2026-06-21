import type { Project } from "@/types";

export const projects: Project[] = [
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
  {
    id: "project-4",
    title: "Book Management System",
    description:
      "A full-stack web application for managing books, users, and reviews. It includes authentication, catalog management, search, review and rating features, and an admin dashboard built with Spring Boot and MySQL.",
    icon: "dashboard",
    tags: ["Spring Boot", "MySQL", "Java", "Spring Security"],
    featured: true,
  },
  {
    id: "project-5",
    title: "Citizen Complaint Platform",
    description:
      "A citizen complaint management platform built with Spring Boot, React.js, TypeScript, React Native, and PostgreSQL. It supports complaint submission, media uploads, status tracking, admin workflow management, secure authentication, and audit logging.",
    icon: "mobile",
    tags: [
      "Spring Boot",
      "React.js",
      "TypeScript",
      "React Native",
      "MongoDB",
      "JWT",
    ],
    featured: true,
  },
  {
    id: "project-6",
    title: "ServeLink",
    description:
      "A service marketplace mobile app that connects customers with local providers for booking services, communication, and reviews. It includes provider verification, role-based access, and a real-time booking workflow.",
    icon: "mobile",
    tags: ["React Native", "Express.js", "MongoDB", "JWT", "GitHub"],
    featured: true,
  },
];

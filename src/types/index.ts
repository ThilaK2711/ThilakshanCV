export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: "dashboard" | "code" | "mobile";
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
  location: string;
  resumeUrl: string;
  github?: string;
  socialLinks: SocialLink[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface NavItem {
  label: string;
  href: string;
}

import {
  LayoutDashboard,
  Code2,
  Smartphone,
  Monitor,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const projectIconMap: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  code: Code2,
  mobile: Smartphone,
};

export const skillCategoryIcons: Record<string, LucideIcon> = {
  frontend: Monitor,
  backend: Server,
  tools: Wrench,
};

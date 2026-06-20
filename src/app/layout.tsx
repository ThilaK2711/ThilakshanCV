import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { CinematicMotion } from "@/components/ui/CinematicMotion";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lingeswaran Thilakshan | Software Engineer",
  description:
    "Portfolio of Lingeswaran Thilakshan — Software Engineer specializing in React, Next.js, Java, Node.js, and Python.",
  keywords: [
    "portfolio",
    "software engineer",
    "React",
    "Next.js",
    "Java",
    "SLIIT",
    "Jaffna",
  ],
  authors: [{ name: "Lingeswaran Thilakshan" }],
  openGraph: {
    title: "Lingeswaran Thilakshan | Software Engineer",
    description:
      "Portfolio of Lingeswaran Thilakshan — Software Engineer specializing in React, Next.js, Java, Node.js, and Python.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundEffects />
        <CinematicMotion />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

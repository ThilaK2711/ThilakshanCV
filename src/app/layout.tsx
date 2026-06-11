import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${jakarta.variable} ${syne.variable} ${jetbrains.variable}`}
    >
      <body>
        <BackgroundEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

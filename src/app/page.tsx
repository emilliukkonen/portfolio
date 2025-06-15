"use client";

import Experience from "./components/Experience";
import About from "./components/About";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {

  const experiences = [
    {
      company: "Ericsson",
      role: "Software Developer Trainee",
      duration: "May 2025 - Present",
      description: "TBA",
    },
    {
      company: "Telia",
      role: "Technical Specialist",
      duration: "May 2024 - Aug 2024 and May 2023 - Aug 2023",
      description: "Handled approx. 1,500 fault report emails and progressed around 400 network issues from May 2024 to August 2024, in an SLA-prioritized environment. Collaborated with both domestic and international parties, handling a wide range of network management tasks and fault types.",
    },
    {
      company: "SLS",
      role: "IT Intern",
      duration: "May 2022 - Aug 2024",
      description: "Provided IT support to employees, managed help desk tickets, and performed server administration tasks. Assisted in the migration from on-premises servers to the cloud and set up around 50 new laptops, helping employees with installation and onboarding to new systems",
    },
  ];


  return (
    <div id="top" className="min-h-screen flex flex-col font-[var(--font-sans)] scroll-smooth">

      {/* HEADER (Navigation) */}
      <Header />

      {/* ABOUT Section */}
      <About />

      {/* MAIN Content */}
      <MainContent />

      {/* WORK EXPERIENCE Section */}
      <Experience experiences={experiences} />
      
      {/* PROJECTS Section */}
      <Projects />

      {/* CONTACT Section */}
      <Contact />

      {/* FOOTER */}
      <footer className="mt-50 flex justify-center py-6">
        <a
          href="#top"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[var(--foreground)]"
        >
          ↑ To the top
        </a>
      </footer>
    </div>
  );
}

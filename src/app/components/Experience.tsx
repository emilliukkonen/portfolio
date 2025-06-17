"use client";

import { useInView } from "../hooks/useInView";
import { useEffect, useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface Props {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: Props) {
  const [ref, inView] = useInView(0.2);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      // Trigger animation only when section comes into view
      setVisible(true);
    } else {
      // Reset visibility to allow re-trigger
      setVisible(false);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen mt-5 w-full max-w-3xl mx-auto px-4 sm:px-8 flex flex-col items-center justify-center"
    >
      <h2 id="experience" className="text-3xl font-medium mb-10 text-center w-full">Experience</h2>

      <div className="relative w-full max-w-3xl">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-6 relative z-10 mb-32 last:mb-0 justify-center transition-opacity duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${idx * 300}ms` }}
          >
            <div className="max-w-prose text-center">
              <h3 className="text-blue-100 text-xl font-medium">{exp.role}</h3>
              <p className="text-blue-300 font-medium">{exp.company}</p>
              <p className="text-blue-100 text-sm italic mb-2">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>

            {idx < experiences.length - 1 && (
              <svg
                className="absolute left-1/2 top-full -translate-x-1/2 mt-8"
                width="40"
                height="80"
                viewBox="0 0 40 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <marker
                    id="arrowhead-up"
                    markerWidth="6"
                    markerHeight="6"
                    refX="3"
                    refY="3"
                    orient="auto-start-reverse"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,6 L3,0 L6,6 Z" fill="var(--foreground)" />
                  </marker>
                </defs>
                <path
                  d="M20 0 C40 20, 0 60, 20 80"
                  stroke="var(--foreground)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  markerStart="url(#arrowhead-up)"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

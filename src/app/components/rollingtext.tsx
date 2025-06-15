"use client";

import { useState, useEffect } from "react";

const rollingTexts = [
  "Master's Student in Software Engineering",
  "Software Developer",
];

export default function RollingText() {
  const [index, setIndex] = useState(0); // which string in rollingTexts
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const fullText = rollingTexts[index];
    if (!isDeleting) {
      // Typing
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 50);
      } else {
        // Move to next text and start typing again
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % rollingTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <p className="max-w-prose leading-relaxed font-mono text-center sm:text-left text-lg sm:text-xl">
      {displayText}
      <span className="inline-block animate-blink">|</span>
    </p>
  );
}

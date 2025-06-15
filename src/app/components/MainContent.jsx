import Image from "next/image";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const basePath = publicRuntimeConfig.basePath || "";

export default function MainContent() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start px-4 sm:px-8 mt-16 max-w-4xl mx-auto">

      {/* Link Row - Centered */}
      <div className="flex flex-wrap justify-center gap-4 items-center w-full">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/emil-liukkonen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="filter-blue" aria-hidden src={`${basePath}/linkedin.png`} alt="Linkedin" width={36} height={36} />
          Linked In
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/emilliukkonen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="filter-blue" aria-hidden src={`${basePath}/github-logo.png`} alt="Github" width={36} height={36} />
          Github
        </a>

        {/* Resume Button */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-10 h-10 text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1-8H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" />
          </svg>
          Resume
        </a>
      </div>

      {/* Additional content */}
      <div className="text-base mt-6 text-center sm:text-left">
        <p>Feel free to check out more of my portfolio and connect with me!</p>
      </div>
    </main>
  );
}

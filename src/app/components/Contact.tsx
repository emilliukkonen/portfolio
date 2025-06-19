import Image from "next/image";

export default function Contact() {
  return (
    <section
      className="w-full max-w-3xl mx-auto px-4 sm:px-8 mt-20 mb-60 text-[20px] sm:text-[24px] font-medium flex flex-col items-start text-left"
    >
      <h2
        id="contact"
        className="mb-4 text-7xl font-medium w-full text-center mb-30"
      >
        Connect with me!
      </h2>

      <div className="flex flex-wrap justify-center gap-4 items-center w-full">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:emil.liukkonen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="filter-blue"
            aria-hidden
            src="/mail.png"
            alt="Email"
            width={40}
            height={40}
          />
          Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/emil-liukkonen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="filter-blue"
            aria-hidden
            src="/linkedin.png"
            alt="LinkedIn"
            width={36}
            height={36}
          />
          Linked In
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/emilliukkonen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="filter-blue"
            aria-hidden
            src="/github-logo.png"
            alt="Github"
            width={36}
            height={36}
          />
          Github
        </a>
      </div>
    </section>
  );
}

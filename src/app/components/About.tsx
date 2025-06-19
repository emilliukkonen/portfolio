"use client";

import RollingText from "./rollingtext";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-3xl mx-auto px-4 sm:px-8 mt-62 text-[20px] sm:text-[24px] font-medium flex flex-col items-start text-left"
    >
      <h2 className="mb-4 text-3xl font-medium w-full">Hi there! My name is Emil</h2>

      <div className="mb-6 w-full">
        <RollingText />
      </div>

      <div className="max-w-prose leading-relaxed animate-color-shift">
        <p>
          As a passionate developer, I&apos;m currently pursuing my M.Sc. in Software and Service Engineering at
          Aalto University with ML/AI as my minor. I have a B.Sc. degree in Automation and robotics. I wrote my theses on 
          <a 
            href="https://aaltodoc.aalto.fi/items/96b45641-b568-4115-9586-5fd97ef356a9"
            className="underline underline-offset-4 hover:text-blue-400"
            target="_blank"
          > Vision-Language Models for Trajectory Prediction.
          </a>
        </p>
        <div className="mt-6 w-full">
          <p>I&apos;m currently working as a software developer trainee at
          Ericsson. My portfolio showcases my previous experiences and projects that highlight my skills.</p>
        </div>
        <div className="mt-6 w-full">
          <p>Feel free to reach out!</p>
        </div>
      </div>
    </section>
  );
}

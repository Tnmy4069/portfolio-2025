"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React </li>
        <li>Node.js & Express</li>
        <li>MongoDB & MySQL</li>
        <li>Tailwind CSS & CSS-in-JS (styled-components, emotion)</li>
        <li>PHP</li>
        <li>API Development and Integration</li>
        <li>Mobile & Web Performance Optimization</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pursuing B.Tech in Computer Science & Design Engineering from MET Institute of Technology, Nashik</li>
        {/* <li>Dr. Babasaheb Ambedkar Technological University</li> */}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Certification from InfosysSpringboard</li>
        <li>Certified Full Stack Developer</li>
        <li>React Native Development</li>
        <li>Frontend Web Developer Certification from Sololearn</li>
        <li>PHP Certificition from Sololearn</li>
        <li>Frontend Web Developer Certification from Sololearn</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt=" experience
            working with JavaScript, TypeScript, React, Node.js, Express, MongoDB, MySQL, PHP, and Git" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl  mb-4  uppercase  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, TypeScript, React, Node.js, Express, MongoDB, MySQL, PHP, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

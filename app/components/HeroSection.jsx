"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { gsap } from "gsap";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const HeroSection = () => {
  const textContainerRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });
    tl.fromTo(
      textContainerRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 }
    )
      .fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1 },
        "<"
      );
  }, []);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          ref={textContainerRef}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
         <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Tanmay Hirodkar",
                1000,
                "Web Developer",
                1000,
                "AI Enthusiast",
                1000,
                "SEO Specialist",
                1000,
                "React Developer",
                1000,
                "MERN Stack Learner",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a Computer Science and Design Engineering student specializing in web development, SEO, and emerging technologies like AI.
            I also have experience in building scalable web applications, managing databases, and optimizing digital presence.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="https://www.linkedin.com/in/hirodkar/"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white flex items-center"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" width={20} height={20} className="mr-2" /> Connect Me
            </Link>
            <Link
              href="/resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div
          ref={imageContainerRef}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero.jpg"
              alt="Tanmay Hirodkar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BatuExams.in (LIVE)",
    description: (
      <>
        An educational platform designed to help students prepare for exams. It might include features like mock tests, quizzes, study materials, and a scheduling system.
        <br />
        <strong>Technologies used:</strong> JavaScript, HTML, CSS, MySQL, PHP, and possibly React or Node.js.
      </>
    ),
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Live"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "HKLearning",
    description: (
      <>
        An e-learning platform or management system that facilitates online courses, lessons, and resources for students and educators.
        <br />
        <strong>Technologies used:</strong> JavaScript, HTML, CSS, MySQL, PHP, and React or Node.js.
      </>
    ),
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Fund Management System",
    description: (
      <>
        A web application to manage and track investments, expenditures, and budget allocations. It allows admin users to monitor financial activities and client users to manage their own funds.
        <br />
        <strong>Technologies used:</strong> MERN stack (MongoDB, Express.js, React, and Node.js), MySQL for database management, and API routes for data handling.
      </>
    ),
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: (
      <>
        A personal portfolio website showcasing your skills, projects, certifications, and professional journey. It serves as an online resume and a place to connect with potential employers and clients.
        <br />
        <strong>Technologies used:</strong> Next.js for server-side rendering, Tailwind CSS for styling, and React for interactive components.
      </>
    ),
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Certificate Management System (LIVE)",
    description: (
      <>
        A system designed to certify more than 1000 certificates for an educational institute. It allows the institute to manage and issue certificates efficiently.
        <br />
        <strong>Technologies used:</strong> JavaScript, MySQL, and PHP.
      </>
    ),
    image: "/images/projects/5.png",
    tag: ["All", "Web", "Live"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Interview Management System (LIVE)" ,
    description: (
      <>
        A system used to manage interviews for more than 100 students within an institute. It helps streamline the scheduling, evaluation, and feedback processes for interview sessions.
        <br />
        <strong>Technologies used:</strong> PHP, MySQL, and DBMS.
      </>
    ),
    image: "/images/projects/6.png",
    tag: ["All", "Web", "Live"],
    gitUrl: "/",
    previewUrl: "/",
  },
];




const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center   uppercase text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Live"
          isSelected={tag === "Live"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
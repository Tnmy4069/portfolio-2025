import HeroSection from "./components/HeroSection";

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
// import EmailSection from "./components/EmailSection";

import WorkSection from "./components/WorkSection";
import EducationSection from "./components/EducationSection";

export default function Home() {
  return (
    
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
     
        {/* <AchievementsSection /> */}
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        {/* <BlogsPage /> */}
        <EducationSection />
        {/* <EmailSection /> */}
      </div>
   
  );
}


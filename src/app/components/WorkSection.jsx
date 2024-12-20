// components/ExperienceTimeline.js
import Image from 'next/image';

const experiences = [
  {
    id: 1,
    company: 'Apex Learning Hub',
    logo: '/images/alh.jpg',
    bgColor: 'bg-gray-700',
    details: [
      '(June 2023 - August 2023)',
      'Developed interactive web applications for student engagement .',
      'Enhanced user experience with responsive and accessible design.',
      'Collaborated with the team to implement performance tracking features.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
  },
  {
    id: 2,
    company: 'HKLearning',
    logo: '/images/hklnaa.png',
    bgColor: 'bg-red-600',
    details: [
      '(April 2023 - June 2023)',
      'Developed a full-stack Learning Management System (LMS) .',
      'Implemented real-time performance analytics for students and instructors.',
      'Optimized system for smooth access to course material and assessments.',
    ],
    skills: ['PHP', 'MySQL', 'Bootstrap', 'UI/UX', 'APIs'],
  },
  {
    id: 3,
    company: 'STSARC',
    logo: '/images/stsarc.png',
    bgColor: 'bg-gray-700',
    details: [
      '(January 2024 - Present)',
      'Managed website operations, focusing on optimization and usability .',
      'Implemented SEO strategies to increase web traffic and visibility.',
      'Designed and developed landing pages for campaigns.',
    ],
    skills: ['SEO', 'Digital Marketing', 'WordPress', 'Database Management', 'Google Analytics'],
  },
  {
    id: 4,
    company: 'SACSDE (President) & E-Cell MET (Vice President)',
    logo: '/images/ecell.png',
    bgColor: 'bg-red-600',
    details: [
      '(July 2023 - Present)',
      'Organized skill-building workshops, including LinkedIn mastery .',
      'Led team initiatives to foster entrepreneurial skills.',
      'Managed high-profile events, achieving high engagement rates.',
    ],
    skills: ['Leadership', 'Workshops', 'Event Management', 'Public Speaking', 'Networking'],
  },
  {
    id: 5,
    company: 'Arohi Software Development',
    logo: '/images/arohi.webp',
    bgColor: 'bg-blue-500',
    details: [
      '(Nov 2024 - May 2025)',
      'Worked as a Full Stack Developer intern on various projects .',
      'Built responsive front-end interfaces using HTML, CSS, and JavaScript frameworks.',
      'Developed RESTful APIs for backend communication.',
      'Managed databases like MongoDB and MySQL for efficient data storage.',
      'Deployed applications to servers ensuring smooth operation.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'MongoDB', 'APIs', 'Git'],
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="container mx-auto w-full h-full py-10" id="work">
      <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">
        WORK EXPERIENCE
      </h1>

      <div className="relative wrap overflow-hidden h-full">
        {/* Timeline Line */}
        <div className="border-2 absolute border-opacity-20 border-primary-500 h-full left-5 md:left-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`mb-8 flex items-center w-full ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col md:flex-row`}
          >
            {/* Timeline Circle */}
           <center><div className="z-20 flex items-center order-1 bg-gradient-to-br from-secondary-500 to-primary-500 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{exp.id}</h1>
            </div></center> 

            {/* Content */}
            <div
              className={`order-1 ${exp.bgColor} rounded-lg w-full md:w-5/12 px-6 py-4 border-4 border-white bg-slate-900 bg-opacity-70 ${
                index % 2 === 0 ? 'md:ml-5' : 'md:mr-5'
              } md:mt-0 mt-5`}
            >
              <div className="flex items-center mb-3">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  width={64}
                  height={64}
                  className="mr-3"
                />
                <h3 className="font-bold text-white text-xl">{exp.company}</h3>
              </div>
              <ul className="list-disc ml-5 text-sm leading-snug tracking-wide text-[#ADB7BE]">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <div className="mt-4">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-gradient-to-br from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ExperienceTimeline;

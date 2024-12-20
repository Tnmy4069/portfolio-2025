import React from 'react';

const EducationSection = () => {
  return (
    <section className=" py-12 px-6" id='education'>
      <div className="container mx-auto text-center">
        <h1 className="text-center uppercase  text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">Education</h1>

        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 justify-center">
          {/* Timeline Item */}
          <div className="flex items-center space-x-4">
            {/* Circle */}
            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary-400 to-secondary-600 flex items-center justify-center text-white">
              <span>1</span>
            </div>
            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-100">HSC - Maharashtra State Board</h3>
              <p>Bifocal Electronics Subject at KTHM College Nashik</p>
              <p className="text-gray-500 text-sm">Year: 2022</p>
            </div>
          </div>

          {/* Timeline Item */}
          <div className="flex items-center space-x-4">
            {/* Circle */}
            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white">
              <span>2</span>
            </div>
            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-100">BTech - Dr. B.A.T. University</h3>
              <p>Branch: Computer Science and Design Engineering</p>
              <p>Institute: METs Institute of Technology, Nashik</p>
              <p className="text-gray-500 text-sm">Year: 2023-2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

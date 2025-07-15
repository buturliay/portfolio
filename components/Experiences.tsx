import React from 'react';

const Experiences = () => {
  return (
    <section id="experiences" className="relative bg-[#FCFCF1] py-20 px-[72px]">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[32px] leading-[48px] tracking-[-0.05em] font-semibold text-[#03045E] font-poppins mb-12">
          experiences
        </h2>
        
        <div className="flex flex-col gap-12">
          {/* Experience 1 */}
            <div className="flex flex-col gap-1">
            <h3 className="text-[22px] leading-[36px] font-semibold text-black font-poppins">
              Software Implementation Intern – Tyler Technologies
            </h3>
            <p className="text-[18px] leading-[27px] text-black font-poppins">
              Utilize SQL to improve property and recording report systems
            </p>
            <p className="text-[16px] leading-[19px] text-black font-inter font-light">
              June 2025 - Present
            </p>
          </div>
          
          {/* Experience 1 */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[22px] leading-[36px] font-semibold text-black font-poppins">
              Research Assistant – Queen’s University Belfast
            </h3>
            <p className="text-[18px] leading-[27px] text-black font-poppins">
              Operate motion tracking technology to assist in the execution of balance and mobility experiments
            </p>
            <p className="text-[16px] leading-[19px] text-black font-inter font-light">
              January 2025 - June 2025
            </p>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[22px] leading-[36px] font-semibold text-black font-poppins">
              Teaching Assistant – Northeastern University
            </h3>
            <p className="text-[18px] leading-[27px] text-black font-poppins">
              Facilitate office hours and graded work for 500+ students
            </p>
            <p className="text-[16px] leading-[19px] text-black font-inter font-light">
              Fall 2025: CS 3100
            </p>
            <p className="text-[16px] leading-[19px] text-black font-inter font-light">
              Summer and Fall 2024: CS 2500
            </p>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[22px] leading-[36px] font-semibold text-black font-poppins">
              Husky Ambassador – Northeastern University
            </h3>
            <p className="text-[18px] leading-[27px] text-black font-poppins">
              Utilize presentation skills to provide prospective students and their families with an overview of the campus
            </p>
            <p className="text-[16px] leading-[19px] text-black font-inter font-light">
              December 2023 - Present
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
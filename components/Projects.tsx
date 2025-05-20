import React from 'react';

const techBadge = (label: string) => (
  <div className="px-3 py-1 bg-[#83BCFF]/40 rounded-full text-sm text-black font-inter whitespace-nowrap">
    {label}
  </div>
);

const CrossLines = ({ className }: { className?: string }) => (
  <svg
    width="126"
    height="121"
    className={className}
    viewBox="0 0 126 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="60" x2="126" y2="60" stroke="#83BCFF" strokeWidth="3" />
    <line x1="95" y1="20" x2="95" y2="121" stroke="#83BCFF" strokeWidth="3" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#FCFCF1] py-15 px-[72px]">
      <div className="relative max-w-[1100px] mx-auto">
      <h2 className="text-[32px] leading-[48px] tracking-[-0.05em] font-semibold text-[#03045E] font-poppins mb-12">
          projects
        </h2>

        <div className="flex flex-wrap pb-10 justify-center gap-[30px]">
          {/* Card 1 - Connections Solver */}
          <div className="w-[329px] bg-white border border-[#03045E] shadow-md rounded-sm p-4 flex flex-col gap-[29px] transition-transform hover:scale-[1.02]">
            <h3 className="text-[24px] font-bold leading-[36px] tracking-[0.01em] font-poppins">
              Connections Solver
            </h3>
            <p className="text-[18px] leading-[22px] font-inter text-black">
              An AI Model capable of classifying words into categories based on semantic similarity, designed in the style of the New York Times' Connections game
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {techBadge('Python')}
              {techBadge('Pygame')}
              {techBadge('Word2Vec')}
            </div>
            <div className="w-full">
              <a href="./ai_paper.pdf" target="_blank" rel="noopener noreferrer"> 
                <button className="px-4 py-2 border border-black text-sm font-inter rounded-sm transition-colors hover:bg-[#03045E] hover:text-white">
                  see research →
                </button>
              </a>
            </div>
          </div>

          {/* Card 2 - Stock Explorer */}
          <div className="w-[329px] bg-white border border-[#03045E] shadow-md rounded-sm p-4 flex flex-col gap-[29px] transition-transform hover:scale-[1.02]">
            <h3 className="text-[24px] font-bold leading-[36px] tracking-[0.01em] font-poppins">
              Stock Explorer
            </h3>
            <p className="text-[18px] leading-[22px] font-inter text-black">
              Leveraged an API to create an interactive model of stock portfolio. In line with the MVC model and equipped with a complete GUI, this educational tool is capable of various calculations such as moving averages and stock trading simulation
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {techBadge('Java')}
              {techBadge('Object Oriented Design')}
              {techBadge('MVC Architecture')}
            </div>
          </div>

          {/* Card 3 - Women in Pre-Law Website */}
          <div className="w-[329px] bg-white border border-[#03045E] shadow-md rounded-sm p-4 flex flex-col gap-[29px] transition-transform hover:scale-[1.02]">
            <h3 className="text-[24px] font-bold leading-[36px] tracking-[0.01em] font-poppins">
              Women In Pre-Law Website
            </h3>
            <p className="text-[18px] leading-[22px] font-inter text-black">
              An informative website for Northeastern Women In Pre-Law
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {techBadge('HTML')}
              {techBadge('CSS')}
              {techBadge('JavaScript')}
            </div>
            <div className="w-full">
              <a href="https://northeasternwomeninprelaw.github.io/" target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 border border-black text-sm font-inter rounded-sm transition-colors hover:bg-[#03045E] hover:text-white">
                  see website →
                </button>
              </a>
            </div>
          </div>
                  {/* Decorative Crosses updated to hug bottom-left of section and top-right of section */}
        <CrossLines className="absolute left-0 bottom-0 -translate-x-[50%] translate-y-[50%] rotate-180" />
        <CrossLines className="absolute right-0 top-15 translate-x-[50%] -translate-y-[50%]" />
        </div>


      </div>
    </section>
  );
};

export default Projects;

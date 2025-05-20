import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-[#FCFCF1] py-[140px] px-[24px] md:px-[72px]">
      <div className="max-w-[1100px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-[40px] md:gap-[80px]">
        {/* Text Section */}
        <div className="max-w-[645px] text-center md:text-left">
          <h2 className="text-[32px] leading-[48px] tracking-[-0.05em] font-semibold text-[#03045E] font-poppins mb-6 md:mb-12">
            hi!
          </h2>
          <p className="font-poppins text-black text-[18px] leading-[30px] mb-6">
            My name is Yuliya, and I am a second year computer science major at Northeastern University with a concentration in AI and a minor in linguistics.
          </p>
          <p className="font-poppins text-black text-[18px] leading-[30px]">
            I am fascinated by applications of AI in data analysis and software development, as well as the intersection of linguistics and computer science.
          </p>
        </div>

        {/* Circular Image */}
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-[2px] border-black shadow-md flex-shrink-0 bg-white flex items-center justify-center">
          <div className="w-[182px] h-[182px] md:w-[282px] md:h-[282px] rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Yuliya profile"
              width={282}
              height={282}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

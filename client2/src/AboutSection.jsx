import { useState, useEffect } from "react";
import image1 from "../images/image.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-[#f8f8f8] py-12 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Images Section - Responsive */}
        <div className="relative flex justify-center mb-12 md:mb-20">
          {/* Main Large Image */}
          <div className={`
            relative rounded-[20px] md:rounded-[30px] overflow-hidden
            ${isMobile ? 'w-[300px] h-[280px]' : isTablet ? 'w-[500px] h-[450px]' : 'w-[600px] h-[550px]'}
          `}>
            <img
              src={image1}
              alt="Building"
              className="w-full h-full object-cover scale-110 md:scale-115"
            />
          </div>

          {/* Top Right Small Image */}
          <div className={`
            absolute rounded-[15px] md:rounded-[20px] overflow-hidden shadow-lg
            ${isMobile 
              ? 'top-6 right-2 w-[100px] h-[100px]' 
              : isTablet 
              ? 'top-8 right-[60px] w-[180px] h-[180px]' 
              : 'top-12 right-[120px] w-[250px] h-[250px]'
            }
          `}>
            <img
              src={image2}
              alt="Apartment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Large Image Card */}
          <div className={`
            absolute bg-white p-1.5 md:p-2 rounded-[15px] md:rounded-[25px] shadow-lg border border-gray-100
            ${isMobile 
              ? 'bottom-[-60px] right-0 w-[200px] h-[140px]' 
              : isTablet 
              ? 'bottom-[-80px] right-[60px] w-[350px] h-[240px]' 
              : 'bottom-[-100px] right-[170px] w-[460px] h-[320px]'
            }
          `}>
            <div className="w-full h-full overflow-hidden rounded-[10px] md:rounded-[20px]">
              <img
                src={image3}
                alt="Interior"
                className="w-full h-full object-cover scale-110 md:scale-115"
              />
            </div>
          </div>
        </div>

        {/* Text Content - Responsive */}
        <div className="max-w-3xl mx-auto text-center mt-20 md:mt-32 px-4 md:px-0">
          <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#6C63FF] font-medium text-xs md:text-sm mb-3 md:mb-4">
            WHO WE ARE
          </p>

          <h2 className="font-serif text-3xl md:text-[42px] lg:text-[52px] leading-tight font-semibold text-[#130b2d] mb-5 md:mb-8">
            We Help People To Finding Residence
            {!isMobile && <br />}
            Since 2010...
          </h2>

          <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10 px-2 md:px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>

          <button className="relative px-6 md:px-10 py-3 md:py-4 bg-white border border-[#6C63FF] rounded-xl text-[#6C63FF] font-medium text-sm md:text-base hover:bg-[#6C63FF] hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

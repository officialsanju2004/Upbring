
import image1 from "../images/image.png";
import image2 from "../images/image2.png";

import image3 from "../images/image3.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative flex justify-center mb-20">
          <div className="relative w-[600px] h-[550px] rounded-[30px] overflow-hidden">
            <img
              src={image1}
              alt="Building"
              className="w-full h-full object-cover scale-115"
            />
          </div>

          <div className="absolute top-12 right-[120px] w-[250px] h-[250px] rounded-[20px] overflow-hidden shadow-lg">
            <img
              src={image2}
              alt="Apartment"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-[-100px] right-[170px] bg-white p-2 rounded-[25px] shadow-lg border border-gray-100">
            <div className="w-[460px] h-[320px] overflow-hidden rounded-[20px]">
              <img
                src={image3}
                alt="Interior"
                className="w-full h-full object-cover scale-115"
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-32">
          <p className="uppercase tracking-[4px] text-[#6C63FF] font-medium mb-4">
            WHO WE ARE
          </p>

          <h2 className="font-serif text-[52px] leading-tight font-semibold text-[#130b2d] mb-8">
            We Help People To Finding Residence
            <br />
            Since 2010...
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>

          <button className="relative px-10 py-4 bg-white border border-[#6C63FF] rounded-xl text-[#6C63FF] font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

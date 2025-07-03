import React from "react";
import { FaArrowRight, FaChalkboardTeacher } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";
import { DiResponsive } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";
import { SiProton } from "react-icons/si";



const Services = () => {
  return (
    <>
      
        <div id="services" className="bg-[#090925] px-8 md:px-[50px] pt-12 flex justify-center text-center">
          <div>
            <h4 className="font-bold text-[16px] text-[#93F2FF]">
              My Specializations Services
            </h4>
            <h1 className="font-bold text-[32px] md:text-[48px] leading-[1.2] text-[#D6DAF0]">
              What I Do
            </h1>
            <p className="font-normal text-[16px] leading-7 text-[#D7D9FF] mt-4">
            I craft user-friendly and visually engaging interfaces for digital products. By combining <br /> usability principles with clean design, I transform ideas into seamless experiences <br /> through thoughtful wireframes, prototypes, and UI designs.


            </p>
          </div>
        </div>

        <div className="min-h-screen bg-[#090925] flex items-center justify-center p-4 md:p-10 overflow-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {/* Service Card 1 */}
            <div className="max-w-[418px] w-full relative bg-[#292345] border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[250px] p-4 md:p-12 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px]  " />

              
              <div className="w-full relative z-10">
                <img src="icons/icon6.png" className="text-[#BDE3FF] pb-2 w-12 h-12" alt="" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                  Web design
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                Web design blends creativity and functionality, crafting visually appealing, user-friendly websites. Graphic designers shape layouts, colors, and typography to deliver engaging digital experiences that captivate audiences.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-12 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
              <TfiMobile className="text-[#93F2FF] pb-2 w-12 h-12" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                  Mobile App design
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                Mobile app design focuses on creating intuitive, visually appealing interfaces for smartphones. Designers craft user experiences that are seamless, engaging, and optimized for mobile interaction.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-12 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
              <DiResponsive className="text-[#BDE3FF] pb-2 w-16 h-16" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                Responsive Design
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                Responsive design adapts websites and apps to different screen sizes and devices, ensuring a seamless, user-friendly experience through flexible layouts, scalable images, and dynamic content.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-12 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
              <CgWebsite className="text-[#BDE3FF] pb-2 w-12 h-12" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                Website Design
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                Website design combines aesthetics and functionality to create engaging, user-friendly sites. Designers focus on layout, visuals, and navigation to deliver a cohesive online experience.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-12 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
              <FaChalkboardTeacher className="text-[#BDE3FF] pb-2 w-12 h-12" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                User Experience
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                User experience (UX) focuses on creating products that are easy, enjoyable, and efficient to use, enhancing user satisfaction through thoughtful design, usability, and interaction.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-12 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
              <SiProton className="text-[#BDE3FF] pb-2 w-12 h-12" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                 Prototypes
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                Prototypes are early, interactive models of a design, allowing designers to test ideas, visualize user flows, and gather feedback before final development begins.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Services;
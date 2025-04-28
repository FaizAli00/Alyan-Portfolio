import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div>
        <div className="bg-[#090925] px-4 md:px-[50px] pt-12 flex justify-center text-center">
          <div>
            <h4 className="font-bold text-[16px] text-[#93F2FF]">
              My Specializations Services
            </h4>
            <h1 className="font-bold text-[32px] md:text-[48px] leading-[1.2] text-[#D6DAF0]">
              What I Do
            </h1>
            <p className="font-normal text-[16px] leading-7 text-[#D7D9FF] mt-4">
              Develop comprehensive content strategies tailored to your unique goals <br />
              and target audience, ensuring that every piece of content.
            </p>
          </div>
        </div>

        <div className="min-h-screen bg-[#090925] flex items-center justify-center p-4 md:p-10 overflow-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {/* Service Card 1 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-8 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px]  " />

              
              <div className="w-full relative z-10">
                <img src="icons/icon6.png" className="text-[#BDE3FF] pb-2 w-12 h-12" alt="" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                  Web design
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                  A comprehensive assessment of health, discussing symptoms and concerns to guide.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-8 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
                <img src="icons/icon3.png" className="text-[#BDE3FF] pb-2 w-12 h-12" alt="" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                  Mobile App design
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                React encourages a declarative programming style, where developers describe the.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-8 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
                <img src="icons/icon1.png" className="text-[#BDE3FF] pb-2 w-12 h-12" alt="" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                Accessibility Design
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-8 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
                <img src="icons/icon2.png" className="text-[#BDE3FF] pb-2 w-12 h-12" alt="" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                Website Design
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                Our online logo maker lets you generate designs perfectly suited to your business from a.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-8 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
                <img src="icons/icon5.png" className="text-[#BDE3FF] pb-2 w-12 h-12" alt="" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                User Experience Audit
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                Figma is the leading collaborative design tool for building meaningful products. Seamlessly.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="max-w-[418px] w-full relative bg-[#292345]  border border-[rgba(255,255,255,0.1)] rounded-[10px] min-h-[349px] p-6 md:p-8 shadow-xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
              <div className="w-full h-full absolute bgCardColor top-0 left-0 rounded-[10px] " />

              
              <div className="w-full relative z-10">
                <img src="icons/icon4.png" className="text-[#BDE3FF] pb-2 w-12 h-12" alt="" />
                <h5 className="font-bold text-[18px] md:text-[20px] leading-6 text-[#F8F6FD] pb-4 md:pb-5">
                Interactive Prototypes
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#D7D9FF] pb-6 md:pb-8">
                Try it free, no obligation! Millions of customers love our logo maker. Premium logo designs created.
                </p>
                <FaArrowRight className="text-[#93F2FF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
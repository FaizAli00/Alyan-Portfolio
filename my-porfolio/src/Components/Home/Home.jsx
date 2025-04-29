import React from "react";

const Home = () => {
  return (
    <div id="home" className=" relative min-h-screen bg-[#090925] p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fade-in-up">
        {/* First Column */}
        <div className="p-4 sm:p-6 bg-[#090925] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-100 mt-12 md:mt-24 z-10">
          <div>
            <span className="text-[40px] sm:text-[50px] md:text-[60px] pt-4 sm:pt-6 font-bold text-green-600">
              Hi
            </span>
            <h1 className="text-white text-[35px] sm:text-[45px] md:text-[55px] font-semibold leading-[1.2] md:leading-[64px]">
              I am <span className="text-yellow-500">Aliyan</span> Ali <br /> UI/UX Designer
            </h1>
            <p className="text-white text-[14px] sm:text-[16px] font-normal leading-6 pt-6 sm:pt-8 md:pt-12">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-wrap max-sm:justify-center gap-4 sm:gap-6 pt-8 sm:pt-10 md:pt-14 pb-6">
            {/* Contact Me Button (Opens Upwork) */}
            <a
              href="https://www.upwork.com/freelancers/~01210ebaf5db3c1e0f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#93F2FF] font-semibold hover:bg-[#302C4A] hover:text-[#93F2FF] text-[#302C4A] px-6 py-3 rounded-lg transition-all duration-300"
            >
              Hire Me on Upwork
              <span className="inline-block ml-2 animate-bounce">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            {/* Download CV Button */}
            <a
              href="/cv/Ali.pdf"
              download="Ali.pdf"
              className="flex items-center bg-black font-semibold hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Download my resume
              <span className="inline-block ml-2 animate-bounce">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Second Column (Image) */}
        <div className="hidden md:flex sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-200 justify-center items-center">
          <img
            src="/img/profile.png"
            className="h-[600px] object-cover object-center rounded-lg"
            alt="Aliyan Ali - UI/UX Designer"
          />
        </div>
      </div>

      {/* Image for small and medium screen absolute on right */}
      <div className="block md:hidden absolute top-20 right-4 sm:right-8">
        <img
          src="/img/profile.png"
          className="h-auto w-[180px] sm:w-[220px] rounded-lg object-cover object-center"
          alt="Aliyan Ali - UI/UX Designer"
        />
      </div>
    </div>
  );
};

export default Home;

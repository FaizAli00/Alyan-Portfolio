import React from "react";
import { FaBehance, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,       // Duration of the scroll animation
      smooth: true,        // Enable smooth scrolling
    });
  };

  return (
    <div className="bg-[#111827] pt-32 px-20 max-sm:p-[18px]" id="contact">
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:text-center max-md:grid-cols-1 gap-6">
        {/* Left Column */}
        <div className="pt-12 md:text-center">
          <h3 className="text-[64px] max-md:text-[50px] max-sm:text-[40px] text-white leading-none font-bold">
            Let's Work <br /> Together
          </h3>
          <div className="flex flex-wrap items-center max-md:justify-center gap-2 mt-10">
            <span className="text-white font-bold text-xl">
              Based in Pakistan |{" "}
            </span>
            <div>
              <ul className="flex flex-wrap gap-x-3 text-[19px]">
                <li>
                  <a
                    href="https://www.behance.net/aliyanali15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FFB646] transition-colors"
                  >
                    <FaBehance />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aliyan-ali-374400247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FFB646] transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FFB646] transition-colors"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FFB646] transition-colors"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Column - Email */}
        <div className="flex flex-col justify-between border rounded-xl p-4">
  <h3 className="text-white text-xl font-bold mb-4">
    Looking for a Creative Designer
  </h3>
  <div className="min-w-0"> {/* Ensures proper text truncation */}
    <a
      href="mailto:aliyanali151006@gmail.com"
      className="text-xl max-md:text-[16px] text-[#ffc107] hover:underline flex items-center gap-2"
    >
      <span className="truncate">aliyanali151006@gmail.com</span>
      <span aria-hidden="true">→</span>
    </a>
  </div>
</div>

        {/* Right Column - Phone */}
        <div className="flex flex-col justify-between border rounded-xl p-4">
          <h3 className="text-white text-xl font-bold mb-4">
            Available for Opportunities
          </h3>
          <div>
            <a
              href="tel:+923554334802"
              className="text-2xl max-md:text-[16px] text-[#ffc107] hover:underline flex items-center justify-between"
            >
              +92 355 4334802
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Name Section */}
      <div className="flex justify-center pt-8 max-sm:px-2">
        <h3 className="text-white font-extrabold text-[150px] md:text-[80px] max-sm:text-[50px]">
          ALIYAN ALI
        </h3>
      </div>

      {/* Footer Bottom */}
      <div className="w-[70%] m-auto pt-8">
        <hr className="border-gray-700" />
        <div className="flex justify-between pt-8 pb-20 max-sm:flex-col max-sm:items-center max-sm:gap-4">
          <div>
            <p className="text-white text-lg font-normal font-sans leading-7">
              © {currentYear} Aliyan Ali, All Rights Reserved
            </p>
          </div>
          
          {/* Back to Top Button */}
          <div 
            className="flex gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToTop}
          >
            <span className="text-white text-base font-normal leading-7">
              Back To Top
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 19V5"
                stroke="#FFB646"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 12L12 5L5 12"
                stroke="#FFB646"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
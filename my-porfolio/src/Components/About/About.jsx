import React from "react";
import { FaBehance, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";

// Reusable gradient circle
const GradientSpinner = ({ duration  }) => {
    return (
        <div
      className="w-20 h-20 rounded-full bg-[conic-gradient(from_0deg,rgba(40,35,69,0.5)_10.38%,rgba(2,2,3,0.5)_84.09%)] flex items-center justify-center"
      style={{
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      <div className="w-10 h-10 bg-[#090925] rounded-full"></div>
    </div>
    );
  }

const About = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#090925] p-4 px-[50px]">
      
      {/* About me */}
      <div className="md:col-span-2 rounded border p-6 text-left">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-3xl md:text-4xl text-white">About me</h2>
          <GradientSpinner duration = {3} />
        </div>
        <p className="text-[#D7D9FF] text-base md:text-lg leading-7">
          Freelancers are known for their flexibility in work hours and
          location. They are responsible <br /> for all aspects of their business, from
          finding clients and managing projects to handling <br /> administrative tasks.
        </p>
      </div>

      {/* Achievement */}
      <div className="border p-6 rounded text-left">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-xl text-[#D6DAF0]">Achievement</h4>
          <GradientSpinner duration = {5} />
        </div>
        <div className="mb-2">
          <h5 className="font-bold text-lg text-[#D7D9FF]">1050+</h5>
          <span className="text-sm text-[#D7D9FF]">Happy Client</span>
        </div>
        <div className="mb-2">
          <h5 className="font-bold text-lg text-[#D7D9FF]">950+</h5>
          <span className="text-sm text-[#D7D9FF]">Successful Projects</span>
        </div>
        <div>
          <h5 className="font-bold text-lg text-[#D7D9FF]">750+</h5>
          <span className="text-sm text-[#D7D9FF]">Complete Project</span>
        </div>
      </div>

      {/* Experience */}
      <div className="border p-6 rounded text-left">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-xl text-[#D6DAF0]">Experience</h4>
          <GradientSpinner duration = {3.5} />
        </div>
        <div className="mb-2">
          <p className="text-sm text-[#D7D9FF]">2020-present</p>
          <h5 className="font-bold text-lg text-[#D7D9FF]">Sr. Developer</h5>
          <p className="text-sm text-[#D7D9FF]">Google.com</p>
        </div>
        <div>
          <p className="text-sm text-[#D7D9FF]">2014-2020</p>
          <h5 className="font-bold text-lg text-[#D7D9FF]">Chiefs of Surgery</h5>
          <p className="text-sm text-[#D7D9FF]">Microsoft.com</p>
        </div>
      </div>

      {/* Education */}
      <div className="border p-6 rounded text-left">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-xl text-[#D6DAF0]">Education</h4>
          <GradientSpinner duration = {4} />
        </div>
        <div className="mb-2">
          <p className="text-sm text-[#D7D9FF]">2013-2014</p>
          <h5 className="font-bold text-lg text-[#D7D9FF]">MBA in (Management)</h5>
          <p className="text-sm text-[#D7D9FF]">London Business School</p>
        </div>
        <div>
          <p className="text-sm text-[#D7D9FF]">2009-2013</p>
          <h5 className="font-bold text-lg text-[#D7D9FF]">BBA in (Management)</h5>
          <p className="text-sm text-[#D7D9FF]">London Business School</p>
        </div>
      </div>

      {/* Follow Me */}
      <div className="border p-6 rounded text-left">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-xl text-[#D6DAF0]">Follow Me</h4>
          <GradientSpinner duration = {4.5} />
        </div>
        <div className="flex gap-4 pt-4">
          <FaBehance className="w-6 h-6 text-[#D7D9FF] cursor-pointer" />
          <FaLinkedin className="w-6 h-6 text-[#D7D9FF] cursor-pointer" />
          <FaTwitter className="w-6 h-6 text-[#D7D9FF] cursor-pointer" />
          <FaInstagramSquare className="w-6 h-6 text-[#D7D9FF] cursor-pointer" />
        </div>
      </div>
    </div>
    </>
    
);

};

export default About;

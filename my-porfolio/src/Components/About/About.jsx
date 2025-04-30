import React from "react";
import {
  FaBehance,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

// Gradient spinner component using Tailwind animation
const GradientSpinner = ({ duration }) => {
  return (
    <div
      className="w-20 h-20 rounded-full bg-[conic-gradient(from_0deg,rgba(40,35,69,0.5)_10.38%,rgba(2,2,3,0.5)_84.09%)] flex items-center justify-center animate-spin duration-[3000ms]"
      style={{
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      <div className="w-10 h-10 bg-[#090925] rounded-full"></div>
    </div>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#090925] p-4 px-[50px]"
    >
      {/* About Me */}
      <div className="md:col-span-2 rounded border p-6 text-left">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-3xl md:text-4xl text-white">
            About me
          </h2>
          <GradientSpinner duration={3} />
        </div>
        <p className="text-[#D7D9FF] text-base md:text-lg leading-7">
          I am a Senior UI/UX and Web Designer specializing in user-centered,
          conversion-driven, and scalable designs for SaaS platforms, web and
          mobile apps, and enterprise solutions. My approach goes beyond
          aesthetics—I create designs that enhance user experience, improve
          engagement, and drive measurable results.
        </p>
      </div>

      {/* Achievement */}
      <div className="border p-6 rounded text-left">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-xl text-[#D6DAF0]">Achievement</h4>
          <GradientSpinner duration={5} />
        </div>
        {[
          { label: "Happy Client", value: "600+" },
          { label: "Successful Projects", value: "591+" },
          { label: "Complete Project", value: "597+" },
        ].map((item, index) => (
          <div key={index} className="mb-2">
            <h5 className="font-bold text-lg text-[#D7D9FF]">{item.value}</h5>
            <span className="text-sm text-[#D7D9FF]">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="border p-6 rounded text-left">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-xl text-[#D6DAF0]">Experience</h4>
          <GradientSpinner duration={3.5} />
        </div>
        <div className="mb-6">
          <p className="text-sm text-[#D7D9FF]">2020-2023</p>
          <h5 className="font-bold text-lg text-[#D7D9FF]">UX/UI Designer</h5>
          <p className="text-sm text-[#D7D9FF]">Franski Enterprise</p>
        </div>
        <div>
          <p className="text-sm text-[#D7D9FF]">2024-present</p>
          <h5 className="font-bold text-lg text-[#D7D9FF]">UX/UI Designer</h5>
          <p className="text-sm text-[#D7D9FF]">Dot To Dot</p>
        </div>
      </div>

      {/* Education */}
      <div className="border p-6 rounded text-left">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-xl text-[#D6DAF0]">Education</h4>
          <GradientSpinner duration={4} />
        </div>
        <div className="mb-6">
          <p className="text-sm text-[#D7D9FF]">2021-2023</p>
          <h5 className="font-bold text-lg text-[#D7D9FF]">Master Degree</h5>
          <p className="text-sm text-[#D7D9FF]">University Of Arts Lahore</p>
        </div>
        <div>
          <p className="text-sm text-[#D7D9FF]">2018-2020</p>
          <h5 className="font-bold text-lg text-[#D7D9FF]">Bachelors Degree</h5>
          <p className="text-sm text-[#D7D9FF]">University Of Arts Lahore</p>
        </div>
      </div>

      {/* Follow Me */}
      <div className="border p-6 rounded text-left">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-xl text-[#D6DAF0]">Follow Me</h4>
          <GradientSpinner duration={4.5} />
        </div>
        <div className="flex gap-4 pt-4">
          <a
            href="https://www.behance.net/aliyanali15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance className="w-6 h-6 text-[#D7D9FF] cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/aliyan-ali-374400247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 text-[#D7D9FF] cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-6 h-6 text-[#D7D9FF] cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="w-6 h-6 text-[#D7D9FF] cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

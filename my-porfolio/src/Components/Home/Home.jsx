import React from "react";

const Home = () => {
  return (
    <section id="home" className="relative bg-[#090925] px-4 sm:px-6 md:px-8 py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10 pt-10">
            <div className="bg-[#090925]/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500">
                Hi, I'm
              </span>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2">
                <span className="text-yellow-500">Aliyan</span> Ali
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80 font-medium mb-6 mt-4">
                UI/UX Designer
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
                Creating intuitive digital experiences that blend beautiful design 
                with seamless functionality.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.upwork.com/freelancers/~01210ebaf5db3c1e0f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#93F2FF] hover:bg-[#302C4A] hover:text-[#93F2FF] text-[#302C4A] font-semibold px-6 py-3 rounded-lg transition-all duration-300 group"
                >
                  Hire Me on Upwork
                  <ArrowIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/cv/Ali.pdf"
                  download="Ali.pdf"
                  className="flex items-center bg-black hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 group"
                >
                  Download Resume
                  <ArrowIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image - Desktop */}
          <div className="hidden md:flex justify-center items-center relative pt-10">
            {/* Dark Shadow Circle */}
            {/* <div className="absolute rounded-full bg-gradient-to-br from-[#0a0a1a] via-[#0d1125] to-[#0a0e1a] opacity-90 blur-[50px] -z-10" /> */}
            
            {/* Profile Image Circle */}
            <div className="relative w-[370px] h-[370px] overflow-hidden">
              <img
                src="/img/one.png"
                alt="Aliyan Ali"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Profile Image - Mobile */}
        <div className="md:hidden flex justify-center mt-12 relative">
          {/* Dark Shadow Circle */}
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#0a0a1a] via-[#0d1125] to-[#0a0e1a] opacity-80 blur-[40px] -z-10" />
          
          {/* Profile Image Circle */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl group">
            <img
              src="/img/profile2.png"
              alt="Aliyan Ali"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              fetchpriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Arrow Icon Component
const ArrowIcon = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 17L17 7M17 7H7V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Home;
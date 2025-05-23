import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Blog', link: '#blog' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <nav className={`fixed w-full h-[100px] z-50  transition-all duration-300 ${scroll ? 'backdrop-blur-lg bg-opacity-30 bg-black' : 'bg-[#090925]'}`}>
      <div className="container mx-auto pt-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-16 md:h-20">
          {/* Logo - Left Side */}
          <a href="/" className="text-2xl font-bold text-white z-50">Portfolio</a>

          {/* Desktop Navigation - Centered Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-4 lg:space-x-8 px-[50px] bg-[#302C4A] rounded-full h-[52px] p-[10px]">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-base lg:text-lg font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Me Button - Right Side */}
          <div className="hidden md:block">
  <a href="https://www.upwork.com/freelancers/~01210ebaf5db3c1e0f" target="_blank" rel="noopener noreferrer">
    <button className="bg-[#302C4A] h-[52px] text-[18px] font-medium text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">
      Hire Me
    </button>
  </a>
</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 transition-all duration-300 transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-[#302C4A] text-white px-8 py-3 rounded-full text-xl hover:scale-105 transition-transform duration-300 mt-4">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
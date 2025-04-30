// Navbar.jsx
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    const sectionId = link.replace('#', '');
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/?scrollTo=${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <nav className={`fixed w-full h-[100px] z-50 transition-all duration-300 ${scroll ? 'backdrop-blur-lg bg-opacity-30 bg-black' : 'bg-[#090925]'}`}>
      <div className="container mx-auto pt-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-[#cfc9fa] z-50 transition-opacity hover:opacity-50 hover:text-[#e2ff61] duration-500">
            Aliyan Ali
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-4 lg:space-x-8 px-[50px] bg-[#302C4A] border-2 border-purple-500 rounded-full h-[52px] p-[10px]">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.link)}
                    className="text-[#a855f7] hover:text-[#e2ff61] transition-opacity hover:opacity-50 duration-500 text-base lg:text-xl font-bold"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Animated Hire Me Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://www.upwork.com/freelancers/~01210ebaf5db3c1e0f"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Hire Me
              </span>
              <span className="relative invisible">Hire Me</span>
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
              <button
                key={item.name}
                onClick={() => handleNavClick(item.link)}
                className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://www.upwork.com/freelancers/~01210ebaf5db3c1e0f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#302C4A] text-white px-8 py-3 rounded-full text-xl hover:scale-105 transition-transform duration-300 mt-4">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

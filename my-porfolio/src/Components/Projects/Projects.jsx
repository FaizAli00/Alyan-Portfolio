import React, { useState } from 'react';
import { MdArrowOutward, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Ecommerce Website Design',
      image: '/projects/p11.webp',
      category: 'web',
      description: 'A complete e-commerce solution with product listings, shopping cart, and secure checkout process. Designed for optimal user experience and conversion rates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
      link: '',
      year: '2023'
    },
    {
      id: 2,
      title: 'Shopify Homepage Design',
      image: '/projects/p10.webp',
      category: 'homepages',
      description: 'Custom Shopify storefront design focusing on brand identity and mobile responsiveness. Increased conversion rates by 35% compared to previous design.',
      technologies: ['Shopify Liquid', 'JavaScript', 'CSS3', 'GSAP'],
      link: '',
      year: '2022'
    },
    {
      id: 3,
      title: 'Bikes Dealership Landing Page',
      image: '/projects/p12.webp',
      category: 'web',
      description: 'High-conversion landing page for a premium bicycle dealership. Featured product showcases with 360° views and interactive configuration.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Three.js'],
      link: '',
      year: '2023'
    },
    {
      id: 4,
      title: 'Banking App Design',
      image: '/projects/p15.webp',
      category: 'mobile',
      description: 'Mobile banking application with secure authentication, transaction history, and budgeting tools. Followed strict financial UX guidelines.',
      technologies: ['Figma', 'React Native', 'Firebase', 'Biometrics'],
      link: '',
      year: '2022'
    },
    {
      id: 5,
      title: 'Wise Dashboard Design',
      image: '/projects/p5.webp',
      category: 'saas',
      description: 'Analytics dashboard for financial SaaS product. Included customizable widgets, data visualization, and reporting tools.',
      technologies: ['React', 'D3.js', 'Chart.js', 'Material UI'],
      link: '',
      year: '2023'
    },
    {
      id: 6,
      title: 'SaaS Dashboard Design',
      image: '/projects/cover1.webp',
      category: 'saas',
      description: 'Comprehensive admin dashboard for B2B SaaS platform with user management, analytics, and system configuration.',
      technologies: ['Vue.js', 'Vuetify', 'REST API', 'JWT Auth'],
      link: '',
      year: '2023'
    },
    {
      id: 7,
      title: 'Web Landing Page Design',
      image: '/projects/p16.webp',
      category: 'web',
      description: 'Marketing landing page for tech startup with animated sections, testimonial carousel, and lead capture form.',
      technologies: ['GSAP', 'Tailwind CSS', 'Formik', 'Yup'],
      link: '',
      year: '2022'
    },
    {
      id: 8,
      title: 'User Persona Design',
      image: '/projects/p17.webp',
      category: 'mobile',
      description: 'Mobile app interface for user profile management with social features and personalized content recommendations.',
      technologies: ['SwiftUI', 'Core Data', 'CloudKit', 'Lottie'],
      link: '',
      year: '2021'
    },
    {
      id: 9,
      title: 'Homepage Design',
      image: '/projects/p18.webp',
      category: 'homepages',
      description: 'Modern homepage design for creative agency with portfolio showcase, client testimonials, and service highlights.',
      technologies: ['Webflow', 'CSS3', 'JavaScript', 'Swiper.js'],
      link: '',
      year: '2022'
    },
    {
      id: 10,
      title: 'Real Estate Homepage',
      image: '/projects/p20.webp',
      category: 'mobile',
      description: 'Property listing app with map integration, advanced filters, and virtual tour capabilities for real estate agency.',
      technologies: ['React Native', 'Google Maps API', 'Firebase', 'Redux'],
      link: '',
      year: '2023'
    },
    {
      id: 11,
      title: 'Landing Page Design',
      image: '/projects/p21.webp',
      category: 'saas',
      description: 'Conversion-focused landing page for SaaS product with feature highlights, pricing tiers, and demo request form.',
      technologies: ['Next.js', 'Tailwind CSS', 'Formspree', 'Framer Motion'],
      link: '',
      year: '2023'
    },
    {
      id: 12,
      title: 'Creative Homepage Concept',
      image: '/projects/p22.webp',
      category: 'homepages',
      description: 'Experimental homepage design with scroll-triggered animations and unconventional navigation for creative portfolio.',
      technologies: ['GSAP', 'ScrollMagic', 'Canvas API', 'CSS Variables'],
      link: '',
      year: '2023'
    }
  ];

  const categories = ['all', 'web', 'mobile', 'saas', 'homepages'];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div id="projects" className="px-4 sm:px-10 py-8 bg-[#090925]">
      {/* Title */}
      <div className="bg-[#090925] px-4 md:px-[50px] pt-12 flex justify-center text-center">
        <div>
          <h1 className="font-bold text-[32px] md:text-[48px] leading-[1.2] text-[#D6DAF0]">
            My Recent Projects
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-10 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-3 sm:px-4 py-1 sm:py-2 text-sm font-medium capitalize rounded-full transition-colors ${
              activeTab === category
                ? 'text-blue-400 bg-blue-900 bg-opacity-50'
                : 'text-gray-400 hover:text-gray-200 bg-gray-800 bg-opacity-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            className="rounded-[10px] border-2 border-[rgba(255,255,255,0.1)] overflow-hidden hover:shadow-lg transition-all bg-[#292345] cursor-pointer group"
            whileHover={{ y: -5 }}
            onClick={() => openModal(project)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">View Details</span>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg text-[#93F2FF] font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.year}</p>
              </div>
              <span className="inline-flex items-center justify-center rounded-full bg-blue-500 text-white p-2 group-hover:bg-blue-600 transition-colors">
                <MdArrowOutward className="w-5 h-5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#1a1a2e] rounded-xl shadow-2xl border border-[rgba(255,255,255,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-[#292345] rounded-full p-2"
              >
                <MdClose className="w-6 h-6" />
              </button>

              <div className="p-6">
                <div className="relative h-64 md:h-80 w-full mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#93F2FF]">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-400">{selectedProject.year}</p>
                  </div>

                  <div className="bg-[#292345] p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Project Description</h3>
                    <p className="text-gray-300">{selectedProject.description}</p>
                  </div>

                  <div className="bg-[#292345] p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-200 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="pt-2">
                    <a
                      // href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      View Live Project
                      <MdArrowOutward className="ml-2" />
                    </a>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
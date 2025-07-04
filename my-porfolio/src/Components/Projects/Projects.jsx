import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Ecommerce Website Design',
      image: '/projects/p11.webp',
      category: 'web',
      description: 'A complete e-commerce solution with product listings, shopping cart, and secure checkout process. Designed for optimal user experience and conversion rates.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe', 'Canva'],
      features: [
        'Product catalog with filters and search',
        'Shopping cart with persistent storage',
        'Secure checkout with Stripe integration',
        'User account management',
        'Admin dashboard for inventory'
      ],
      challenges: 'Implementing real-time inventory updates while maintaining performance during high traffic periods.',
      solutions: 'Used MongoDB change streams to implement efficient inventory updates without polling the database.',
      link: '',
      year: '2023',
      client: 'Fashion Boutique Inc.',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 2,
      title: 'Shopify Homepage Design',
      image: '/projects/p10.webp',
      category: 'homepages',
      description: 'Custom Shopify storefront design focusing on brand identity and mobile responsiveness. Increased conversion rates by 35% compared to previous design.',
      technologies: ['Shopify Liquid', 'UI/UX', 'Figma', 'Canva'],
      features: [
        'Mobile-first responsive design',
        'Custom product showcase carousel',
        'Integrated newsletter signup',
        'Performance optimized assets'
      ],
      challenges: 'Working within Shopify template limitations while delivering custom design.',
      solutions: 'Created custom sections with Shopify Liquid that maintained editability while achieving design goals.',
      link: '',
      year: '2022',
      client: 'Urban Styles Co.',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 3,
      title: 'Bikes Dealership Landing Page',
      image: '/projects/p12.webp',
      category: 'web',
      description: 'High-conversion landing page for a premium bicycle dealership. Featured product showcases with 360° views and interactive configuration.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Landing Page',],
      features: [
        'Interactive 3D bike viewer',
        'Custom configuration tool',
        'Dealer locator map',
        'Test ride booking system'
      ],
      challenges: 'Implementing smooth 3D interactions on mobile devices.',
      solutions: 'Optimized Three.js implementation with fallbacks for lower-powered devices.',
      link: '',
      year: '2023',
      client: 'Velocity Bikes',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 4,
      title: 'Banking App Design',
      image: '/projects/p15.webp',
      category: 'mobile',
      description: 'Mobile banking application with secure authentication, transaction history, and budgeting tools. Followed strict financial UX guidelines.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe', 'Canva'],
      features: [
        'Fingerprint/Face ID login',
        'Transaction categorization',
        'Spending analytics',
        'Bill pay scheduling'
      ],
      challenges: 'Meeting banking security requirements while maintaining good UX.',
      solutions: 'Worked closely with security team to implement auth flows that were both secure and user-friendly.',
      link: '',
      year: '2022',
      client: 'First Regional Bank',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 5,
      title: 'Wise Dashboard Design',
      image: '/projects/p5.webp',
      category: 'saas',
      description: 'Analytics dashboard for financial SaaS product. Included customizable widgets, data visualization, and reporting tools.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe',],
      features: [
        'Customizable dashboard layout',
        'Real-time data visualization',
        'Exportable reports',
        'Role-based access control'
      ],
      challenges: 'Handling large datasets without performance degradation.',
      solutions: 'Implemented data sampling and virtualization techniques for smooth rendering.',
      link: '',
      year: '2023',
      client: 'Wise Analytics',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 6,
      title: 'SaaS Dashboard Design',
      image: '/projects/cover1.webp',
      category: 'saas',
      description: 'Comprehensive admin dashboard for B2B SaaS platform with user management, analytics, and system configuration.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe', 'Canva'],
      features: [
        'User management system',
        'System health monitoring',
        'Audit logging',
        'Dark/light mode'
      ],
      challenges: 'Creating a flexible system that could adapt to different client needs.',
      solutions: 'Built modular components that could be enabled/disabled per client requirements.',
      link: '',
      year: '2023',
      client: 'AdminSoft Inc.',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 7,
      title: 'Web Landing Page Design',
      image: '/projects/p16.webp',
      category: 'web',
      description: 'Marketing landing page for tech startup with animated sections, testimonial carousel, and lead capture form.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe', 'Landing Page'],
      features: [
        'Scroll-triggered animations',
        'Interactive demo request form',
        'Testimonial carousel',
        'Mobile-optimized performance'
      ],
      challenges: 'Creating impactful animations without sacrificing performance.',
      solutions: 'Used GSAP with will-change properties and optimized asset loading.',
      link: '',
      year: '2022',
      client: 'TechNova',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 8,
      title: 'User Persona Design',
      image: '/projects/p17.webp',
      category: 'mobile',
      description: 'Mobile app interface for user profile management with social features and personalized content recommendations.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe', 'Canva'],
      features: [
        'Personalized feed algorithm',
        'Social connection features',
        'Achievement system',
        'Dark mode support'
      ],
      challenges: 'Syncing data across devices while maintaining performance.',
      solutions: 'Implemented CloudKit with local Core Data caching for seamless sync.',
      link: '',
      year: '2021',
      client: 'ConnectApp',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 9,
      title: 'Homepage Design',
      image: '/projects/p18.webp',
      category: 'homepages',
      description: 'Modern homepage design for creative agency with portfolio showcase, client testimonials, and service highlights.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe', 'Homepage Design'],
      features: [
        'Interactive portfolio grid',
        'Client logo carousel',
        'Animated service cards',
        'CMS-editable content'
      ],
      challenges: 'Balancing creative design with Webflow limitations.',
      solutions: 'Custom JavaScript enhancements combined with Webflow native features.',
      link: '',
      year: '2022',
      client: 'PixelPerfect Agency',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 10,
      title: 'Real Estate Homepage',
      image: '/projects/p20.webp',
      category: 'mobile',
      description: 'Property listing app with map integration, advanced filters, and virtual tour capabilities for real estate agency.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe', 'Canva'],
      features: [
        'Interactive property map',
        'Advanced search filters',
        'Virtual tour integration',
        'Favorites system'
      ],
      challenges: 'Handling large numbers of property listings efficiently.',
      solutions: 'Implemented pagination and server-side filtering to optimize performance.',
      link: '',
      year: '2023',
      client: 'Prime Properties',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 11,
      title: 'Landing Page Design',
      image: '/projects/p21.webp',
      category: 'saas',
      description: 'Conversion-focused landing page for SaaS product with feature highlights, pricing tiers, and demo request form.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe', 'Canva'],
      features: [
        'Interactive pricing calculator',
        'Feature comparison table',
        'Animated call-to-action',
        'Form validation'
      ],
      challenges: 'Creating clear differentiation between pricing tiers.',
      solutions: 'Used visual hierarchy and micro-interactions to highlight value propositions.',
      link: '',
      year: '2023',
      client: 'SaaSify',
      role: 'UI/UX and Graphic Designer'
    },
    {
      id: 12,
      title: 'Creative Homepage Concept',
      image: '/projects/p22.webp',
      category: 'homepages',
      description: 'Experimental homepage design with scroll-triggered animations and unconventional navigation for creative portfolio.',
      technologies: ['UI/UX Design', 'Graphic Design', 'Figma', 'Wireframe', 'Canva'],
      features: [
        'Parallax scrolling effects',
        'Dynamic background transitions',
        'Non-linear navigation',
        'Motion-responsive elements'
      ],
      challenges: 'Making unconventional navigation intuitive.',
      solutions: 'Added visual cues and progressive disclosure of navigation options.',
      link: '',
      year: '2023',
      client: 'Studio Nova',
      role: 'UI/UX and Graphic Designer'
    }
  ];

  const categories = ['all', 'web', 'mobile', 'saas', 'homepages'];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  const openProjectDetails = (project) => {
    navigate(`/projects/${project.id}`, { state: { project } });
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
            onClick={() => openProjectDetails(project)}
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
    </div>
  );
};

export default Projects;
import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Ecommerce Website Design',
      image: '/projects/p11.jpeg',
      category: 'web',
    },
    {
      id: 2,
      title: 'Shopify Homepage Design',
      image: '/projects/p10.jpg',
      category: 'homepages',
    },
    {
      id: 3,
      title: 'Bikes Dealership Landing Page Design',
      image: '/projects/p12.jpg',
      category: 'web',
    },
    {
      id: 4,
      title: 'Banking App Design',
      image: '/projects/p15.png',
      category: 'mobile',
    },
    {
      id: 5,
      title: 'Wise Dashboard Design',
      image: '/projects/p5.jpg',
      category: 'saas',
    },
    {
      id: 6,
      title: 'SaaS Dashboard Design',
      image: '/projects/cover1.jpg',
      category: 'saas',
    },
    {
      id: 7,
      title: 'Web Landing Page Design',
      image: '/projects/p16.jpg',
      category: 'web',
    },
    {
      id: 8,
      title: 'User Persona Design',
      image: '/projects/p17.png',
      category: 'mobile',
    },
    {
      id: 9,
      title: 'Homepage Design',
      image: '/projects/p18.jpg',
      category: 'homepages',
    },

    // ➡️ NEW projects added below:

    {
      id: 10,
      title: 'Food Delivery App UI',
      image: '/projects/p20.png',
      category: 'mobile',
    },
    {
      id: 11,
      title: 'Analytics SaaS Dashboard',
      image: '/projects/p21.jpg',
      category: 'saas',
    },
    {
      id: 12,
      title: 'Creative Homepage Concept',
      image: '/projects/p22.jpg',
      category: 'homepages',
    },
  ];

  const categories = ['all', 'web', 'mobile', 'saas', 'homepages'];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <div id="projects" className="px-10 py-8 bg-[#090925]">
      {/* Title */}
      <div className="bg-[#090925] px-4 md:px-[50px] pt-12 flex justify-center text-center">
        <div>
          <h1 className="font-bold text-[32px] md:text-[48px] leading-[1.2] text-[#D6DAF0]">
            My Recent Projects
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center space-x-4 mt-10 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 text-sm font-medium capitalize ${
              activeTab === category
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="rounded-[10px] border-2 border-[rgba(255,255,255,0.1)] overflow-hidden hover:shadow-lg transition-shadow bg-[#292345]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 flex items-center justify-between">
              <h3 className="text-lg text-[#93F2FF] font-semibold">
                {project.title}
              </h3>
              <span className="inline-flex items-center justify-center rounded-full bg-blue-500 text-white p-2">
                <MdArrowOutward className="w-5 h-5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

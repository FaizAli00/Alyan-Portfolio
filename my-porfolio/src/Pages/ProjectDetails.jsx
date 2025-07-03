import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdArrowBack, MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#090925] text-white">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <MdArrowBack className="mr-2" />
          Back to Projects
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.1)]"
        >
          {/* Hero Section */}
          <div className="relative h-64 md:h-96 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-10">
              <div>
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold text-[#93F2FF] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h1>
                <div className="flex flex-wrap gap-4 text-sm md:text-base">
                  <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                  <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full capitalize">
                    {project.category}
                  </span>
                  {project.client && (
                    <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full">
                      {project.client}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-[#D6DAF0] mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </motion.section>

              {/* Key Features */}
              {project.features && (
                <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[#D6DAF0] mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Key Features
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Challenges & Solutions */}
              {project.challenges && (
                <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="bg-[#292345]/50 p-5 rounded-lg border border-[rgba(255,255,255,0.05)]">
                    <h3 className="text-xl font-semibold text-red-300 mb-3">Challenges</h3>
                    <p className="text-gray-300">{project.challenges}</p>
                  </div>
                  <div className="bg-[#292345]/50 p-5 rounded-lg border border-[rgba(255,255,255,0.05)]">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">Solutions</h3>
                    <p className="text-gray-300">{project.solutions}</p>
                  </div>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-[#292345] p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-[#D6DAF0] mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-2 bg-blue-900/50 text-blue-200 rounded-lg text-sm flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-[#292345] p-6 rounded-lg space-y-4"
              >
                <h3 className="text-xl font-bold text-[#D6DAF0] mb-2">Project Details</h3>
                {project.role && (
                  <div>
                    <h4 className="text-sm text-gray-400">My Role</h4>
                    <p className="text-gray-200">{project.role}</p>
                  </div>
                )}
                {project.client && (
                  <div>
                    <h4 className="text-sm text-gray-400">Client</h4>
                    <p className="text-gray-200">{project.client}</p>
                  </div>
                )}
                <div>
                  <h4 className="text-sm text-gray-400">Year</h4>
                  <p className="text-gray-200">{project.year}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Category</h4>
                  <p className="text-gray-200 capitalize">{project.category}</p>
                </div>
              </motion.div>

              {/* CTA */}
              {project.link && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                  >
                    View Live Project
                    <MdArrowOutward className="ml-2" />
                  </a>
                </motion.div>
              )}
            </div>
          </div>

          {/* Gallery Section (optional) */}
          {/* <div className="p-6 md:p-10 border-t border-[rgba(255,255,255,0.1)]">
            <h2 className="text-2xl font-bold text-[#D6DAF0] mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-48 bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={`/projects/screenshots/${project.id}-${item}.webp`}
                    alt={`${project.title} screenshot ${item}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
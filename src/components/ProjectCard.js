import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onClick={handleClick}
    >
      {/* Project Image */}
      <div className="aspect-video bg-[#1F1F1F] rounded-lg overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Project Title */}
      <h3 className="text-white text-lg font-medium mt-3 text-center group-hover:text-[#E50914] transition-colors duration-300">
        {project.title}
      </h3>
    </motion.div>
  );
};

export default ProjectCard; 
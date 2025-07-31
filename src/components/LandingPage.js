import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#000000] relative overflow-hidden"
      onClick={() => navigate('/profiles')}
    >
      {/* Netflix-style gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/80 to-[#000000] z-10" />
      
      {/* Centered content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
        >
          <img 
            src="/landing_page.png" 
            alt="Portfolio Logo" 
            className="max-w-[80vw] max-h-[80vh] object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage; 
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "Recruiter",
    icon: "👔",
    description: "View my professional experience and skills"
  },
  {
    name: "Viewer",
    icon: "👀",
    description: "Explore my creative projects and designs"
  },
  {
    name: "Adventurer",
    icon: "🚀",
    description: "Discover my experimental and innovative work"
  }
];

const ProfileSelector = () => {
  const navigate = useNavigate();

  const handleProfileSelect = (profile) => {
    navigate(`/profile/${profile.name}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center p-8 relative"
    >
      {/* Netflix-style gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/80 to-[#000000] z-10" />

      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-7xl font-bold mb-8 text-white relative z-20"
      >
        Who's Watching?
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full relative z-20">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center cursor-pointer transform transition-all duration-300"
            onClick={() => handleProfileSelect(profile)}
          >
            <div className="w-40 h-40 bg-[#141414] rounded-lg flex items-center justify-center mb-4 border border-[#333333] hover:border-[#E50914] transition-colors duration-300">
              <div className="text-9xl">{profile.icon}</div>
            </div>
            <h2 className="text-xl font-medium text-[#B3B3B3]">{profile.name}</h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileSelector;

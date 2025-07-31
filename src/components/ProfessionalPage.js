import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProfessionalPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('education');

  const resumeData = {
    education: {
      title: "Education",
      items: [
        {
          institution: "University of California, Los Angeles (UCLA)",
          location: "Los Angeles, CA",
          degree: "B.S. in Data Theory",
          minor: "Minor in Data Science Engineering",
          graduation: "Expected Graduation: June 2027",
          gpa: "GPA: 3.85/4.0",
          coursework: [
            "Data Analysis and Regression",
            "Data Structures and Algorithms", 
            "Mathematical Statistics",
            "Experimental Design",
            "Statistical Modeling",
            "Statistical Optimization",
            "Statistical Models in Finance"
          ]
        }
      ]
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          title: "Data Analyst Intern",
          company: "Pacific Life",
          duration: "Summer 2025",
          location: "",
          description: "Upcoming role in data analysis"
        },
        {
          title: "Data Consultant",
          company: "UCLA Football - Bruin Sports Analytics",
          duration: "September 2024 – Present",
          location: "Los Angeles, CA",
          description: "Delivered actionable, data-driven insights to coaching staff, using predictive modeling and statistical tools. Built interactive dashboards using R Shiny, facilitating data-driven decisions by visualizing key metrics. Collaborated with coaches to translate analytical results into real-world competitive advantages."
        },
        {
          title: "AWS Migration Intern",
          company: "UCLA Epicenter",
          duration: "March 2024 – June 2024",
          location: "Los Angeles, CA",
          description: "Deployed web tools to AWS, gaining experience in scalable cloud environments. Diagnosed and resolved deployment issues in a fast-paced, hybrid team environment. Customized web content using HTML/CSS and documented procedures for future technical continuity."
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: [
        {
          name: "Programming Languages",
          skills: ["Python", "C++", "R", "SQL"]
        },
        {
          name: "Data Science & ML",
          skills: ["Pandas", "Numpy", "Scikit-learn", "Pytorch", "Artificial Intelligence", "Data Visualization", "Seaborn", "Plotly"]
        },
        {
          name: "Tools & Platforms",
          skills: ["AWS", "Tableau", "Git", "Microsoft Office Suite", "Excel", "Snowflake"]
        },
        {
          name: "Data Management",
          skills: ["Data Management", "Data Analysis", "Statistical Modeling"]
        }
      ]
    }
  };

  const sections = [
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🛠️' }
  ];

  const renderEducation = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {resumeData.education.items.map((edu, index) => (
        <div key={index} className="bg-[#141414] rounded-lg p-8 border border-[#333333] hover:border-[#E50914] transition-colors duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
              <p className="text-[#E50914] text-lg">{edu.location}</p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">{edu.graduation}</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-xl text-white mb-1">{edu.degree}</p>
            <p className="text-[#B3B3B3]">{edu.minor}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {edu.coursework.map((course, idx) => (
                <div key={idx} className="bg-[#1F1F1F] rounded px-3 py-2">
                  <span className="text-[#B3B3B3] text-sm">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );

  const renderExperience = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {resumeData.experience.items.map((exp, index) => (
        <div key={index} className="bg-[#141414] rounded-lg p-8 border border-[#333333] hover:border-[#E50914] transition-colors duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-[#E50914] text-lg">{exp.company}</p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">{exp.duration}</p>
              {exp.location && <p className="text-[#B3B3B3] text-sm">{exp.location}</p>}
            </div>
          </div>
          <p className="text-[#B3B3B3] leading-relaxed">{exp.description}</p>
        </div>
      ))}
    </motion.div>
  );

  const renderSkills = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {resumeData.skills.categories.map((category, index) => (
        <div key={index} className="bg-[#141414] rounded-lg p-8 border border-[#333333] hover:border-[#E50914] transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-6">{category.name}</h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-[#E50914] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#B81D24] transition-colors duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#000000] text-white relative"
    >
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-40 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo and Navigation Links on the left */}
          <div className="flex items-center space-x-8">
                    <img 
          src="/portfolio/landing_page.png" 
          alt="Portfolio Logo" 
          className="h-32 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate('/')}
        />
            
            {/* Navigation Links next to logo */}
            <div className="flex items-center space-x-6">
              <span 
                className="text-white cursor-pointer hover:text-[#E50914] transition-colors font-medium"
                onClick={() => navigate('/profiles')}
              >
                Home
              </span>
              <span className="text-white cursor-pointer hover:text-[#E50914] transition-colors font-medium text-[#E50914]">
                Professional
              </span>
              <span className="text-white cursor-pointer hover:text-[#E50914] transition-colors font-medium">
                Skills
              </span>
              <span 
                className="text-white cursor-pointer hover:text-[#E50914] transition-colors font-medium"
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </span>
            </div>
          </div>
          
          {/* Profile Icon on the right */}
          <div className="w-12 h-12 bg-[#141414] rounded-lg flex items-center justify-center border border-[#333333]">
            <div className="text-2xl">👔</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-40 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-bold text-white mb-6">Professional Resume</h1>
            <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
              Harsh Govindji | Data Scientist & Software Developer
            </p>
          </motion.div>

          {/* Section Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-[#141414] rounded-lg p-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-[#E50914] text-white'
                      : 'text-[#B3B3B3] hover:text-white hover:bg-[#1F1F1F]'
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="min-h-[600px]">
            {activeSection === 'education' && renderEducation()}
            {activeSection === 'experience' && renderExperience()}
            {activeSection === 'skills' && renderSkills()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalPage; 
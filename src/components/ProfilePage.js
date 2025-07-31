import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import ProjectCard from './ProjectCard';

const ProfilePage = () => {
  const { profileType } = useParams();
  const navigate = useNavigate();
  
  const profileInfo = {
    Recruiter: {
      description: "Hi, I'm Harsh Govindji! I'm a passionate software developer and data scientist with expertise in full-stack development, machine learning, and statistical analysis. I specialize in building scalable applications using modern technologies like React, Python, and cloud services. I'm currently seeking opportunities to contribute to innovative projects and grow as a developer.",
      projects: [
        {
          title: "Basketball RAG Model Data Analyst",
          description: "Built a natural-language query system integrating LLMs with structured SQL data for real-time analytical responses",
          image: "/website/basketball_rag_picture.png",
          link: "https://github.com/hgovi/Basketball_RAG"
        },
        {
          title: "Statistical Arbitrage with Pairs Trading",
          description: "Quantitative Trading with two Cointegrated Stocks",
          image: "/website/qunat.jpeg",
          link: "/website/StatArb.pdf"
        },
        {
          title: "Credit Card Fraud Detection",
          description: "Detect Fraud Transactions using Machine Learning",
          image: "/website/ccimg.jpeg",
          link: "/website/CreditCardFraud.html"
        },
        {
          title: "Predicting NBA MVPs using Machine Learning",
          description: "Web scraping project that uses historic NBA data",
          image: "/website/nbaImage.webp",
          link: "/website/WebScraping.html"
        },
        {
          title: "Time Series Forecasting",
          description: "Predict Energy Consumption using Time-Series data",
          image: "/website/timeSeries.webp",
          link: "/website/TimeSeriesForecasting.html"
        },
        {
          title: "Dashboarding Project",
          description: "Interactive Customer Service Dashboard",
          image: "/website/project2img.jpeg",
          link: "https://public.tableau.com/views/Book1_17259330068070/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        },
        {
          title: "Cancer Prediction Model",
          description: "Logistic Regression model to predict cancer diagnosis",
          image: "/website/cancer-metastasis-cancerwise.jpg",
          link: "/website/Written Report-2.pdf"
        },
        {
          title: "Job Market Data Analysis",
          description: "View the threat of AI across different industries and roles",
          image: "/website/job-market.webp",
          link: "/website/JobMarketInsights.html"
        },
        {
          title: "Stock Price Prediction",
          description: "Predict the Price of the S&P 500 using historic data",
          image: "/website/stocks.avif",
          link: "/website/StockPrediction.html"
        }
      ]
    },
    Viewer: {
      description: "Welcome to my portfolio! I'm Harsh Govindji, a creative developer and data scientist who loves building beautiful and functional applications. I believe in clean code, user-centered design, and continuous learning.",
      projects: [
        {
          title: "Basketball RAG Model Data Analyst",
          description: "Built a natural-language query system integrating LLMs with structured SQL data for real-time analytical responses",
          image: "/website/basketball_rag_picture.png",
          link: "https://github.com/hgovi/Basketball_RAG"
        },
        {
          title: "Statistical Arbitrage with Pairs Trading",
          description: "Quantitative Trading with two Cointegrated Stocks",
          image: "/website/qunat.jpeg",
          link: "/website/StatArb.pdf"
        },
        {
          title: "Credit Card Fraud Detection",
          description: "Detect Fraud Transactions using Machine Learning",
          image: "/website/ccimg.jpeg",
          link: "/website/CreditCardFraud.html"
        },
        {
          title: "Predicting NBA MVPs using Machine Learning",
          description: "Web scraping project that uses historic NBA data",
          image: "/website/nbaImage.webp",
          link: "/website/WebScraping.html"
        },
        {
          title: "Time Series Forecasting",
          description: "Predict Energy Consumption using Time-Series data",
          image: "/website/timeSeries.webp",
          link: "/website/TimeSeriesForecasting.html"
        },
        {
          title: "Dashboarding Project",
          description: "Interactive Customer Service Dashboard",
          image: "/website/project2img.jpeg",
          link: "https://public.tableau.com/views/Book1_17259330068070/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        },
        {
          title: "Cancer Prediction Model",
          description: "Logistic Regression model to predict cancer diagnosis",
          image: "/website/cancer-metastasis-cancerwise.jpg",
          link: "/website/Written Report-2.pdf"
        },
        {
          title: "Job Market Data Analysis",
          description: "View the threat of AI across different industries and roles",
          image: "/website/job-market.webp",
          link: "/website/JobMarketInsights.html"
        },
        {
          title: "Stock Price Prediction",
          description: "Predict the Price of the S&P 500 using historic data",
          image: "/website/stocks.avif",
          link: "/website/StockPrediction.html"
        }
      ]
    },
    Adventurer: {
      description: "Hey there! I'm Harsh Govindji, an adventurous developer and data scientist who loves exploring new technologies and pushing the boundaries of what's possible. I'm always excited to take on new challenges and learn from every project.",
      projects: [
        {
          title: "Basketball RAG Model Data Analyst",
          description: "Built a natural-language query system integrating LLMs with structured SQL data for real-time analytical responses",
          image: "/website/basketball_rag_picture.png",
          link: "https://github.com/hgovi/Basketball_RAG"
        },
        {
          title: "Statistical Arbitrage with Pairs Trading",
          description: "Quantitative Trading with two Cointegrated Stocks",
          image: "/website/qunat.jpeg",
          link: "/website/StatArb.pdf"
        },
        {
          title: "Credit Card Fraud Detection",
          description: "Detect Fraud Transactions using Machine Learning",
          image: "/website/ccimg.jpeg",
          link: "/website/CreditCardFraud.html"
        },
        {
          title: "Predicting NBA MVPs using Machine Learning",
          description: "Web scraping project that uses historic NBA data",
          image: "/website/nbaImage.webp",
          link: "/website/WebScraping.html"
        },
        {
          title: "Time Series Forecasting",
          description: "Predict Energy Consumption using Time-Series data",
          image: "/website/timeSeries.webp",
          link: "/website/TimeSeriesForecasting.html"
        },
        {
          title: "Dashboarding Project",
          description: "Interactive Customer Service Dashboard",
          image: "/website/project2img.jpeg",
          link: "https://public.tableau.com/views/Book1_17259330068070/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        },
        {
          title: "Cancer Prediction Model",
          description: "Logistic Regression model to predict cancer diagnosis",
          image: "/website/cancer-metastasis-cancerwise.jpg",
          link: "/website/Written Report-2.pdf"
        },
        {
          title: "Job Market Data Analysis",
          description: "View the threat of AI across different industries and roles",
          image: "/website/job-market.webp",
          link: "/website/JobMarketInsights.html"
        },
        {
          title: "Stock Price Prediction",
          description: "Predict the Price of the S&P 500 using historic data",
          image: "/website/stocks.avif",
          link: "/website/StockPrediction.html"
        }
      ]
    }
  };

  // If the profile type is not valid, redirect to home
  if (!profileInfo[profileType]) {
    return <Navigate to="/" replace />;
  }

  const currentProfile = profileInfo[profileType];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#000000] text-white relative"
    >
      {/* Hero Section with Video - For All Profiles */}
      <div className="relative h-[80vh]">
        {/* Video Background */}
        <VideoBackground 
          videoSrc="/wall_streetclip.mp4" 
          className="z-0"
        />
        
        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 z-40 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Logo and Navigation Links on the left */}
            <div className="flex items-center space-x-8">
                              <img 
                  src="/landing_page.png" 
                  alt="Portfolio Logo" 
                  className="h-32 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => navigate('/profiles')}
                />
              
              {/* Navigation Links next to logo */}
              <div className="flex items-center space-x-6">
                <span 
                  className="text-white cursor-pointer hover:text-[#E50914] transition-colors font-medium"
                  onClick={() => navigate('/profiles')}
                >
                  Home
                </span>
                <span 
                  className="text-white cursor-pointer hover:text-[#E50914] transition-colors font-medium"
                  onClick={() => navigate('/professional')}
                >
                  Professional
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
              <div 
                className="w-12 h-12 bg-[#141414] rounded-lg flex items-center justify-center border border-[#333333] cursor-pointer hover:bg-[#333333] transition-colors"
                onClick={() => navigate('/profiles')}
              >
                <div className="text-2xl">
                  {profileType === 'Recruiter' ? '👔' : 
                   profileType === 'Viewer' ? '👁️' : 
                   profileType === 'Adventurer' ? '🗺️' : '👔'}
                </div>
              </div>
          </div>
        </div>
        
        {/* Hero Content at Bottom of Video */}
        <div className="absolute bottom-0 left-0 z-30 p-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Harsh Govindji
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-white max-w-2xl leading-relaxed drop-shadow-lg"
          >
            {currentProfile.description}
          </motion.p>
        </div>
      </div>
      

      
      {/* Projects Section */}
      <div className="relative z-20 bg-[#141414]">
        <div className="px-4 py-8">
          <h2 className="text-3xl font-bold mb-8 text-white">
            {profileType === 'Recruiter' ? "Today's Top Picks For Recruiter" : `${profileType}'s Featured Projects`}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {currentProfile.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage; 
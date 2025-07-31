import React from 'react';

const VideoBackground = ({ videoSrc, className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.6)' }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default VideoBackground; 
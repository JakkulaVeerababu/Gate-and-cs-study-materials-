import React from 'react';

const ScrollingBanner = () => {
  const resources = [
    "GATE CSE", "GATE ECE", "GATE MECH", "GATE CIVIL", "GATE AI", "GATE DS",
    "Full Stack Development", "Android Development", "iOS Development", "DSA", 
    "Operating Systems", "DBMS", "Computer Networks", "VLSI Design", "Embedded Systems", 
    "FPGA", "Machine Learning", "Artificial Intelligence", "Data Science", "Python", 
    "Java", "React JS", "Node JS", "Angular", "HTML/CSS", "JavaScript", "C/C++", 
    "SQL", "MongoDB", "Express JS", "Computer Graphics", "Computer Architecture",
    "Interview Preparation", "Coding Projects", "Web Development", "Mobile Development"
  ];

  return (
    <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 py-4 overflow-hidden relative shadow-lg">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...resources, ...resources].map((resource, index) => (
          <span 
            key={index}
            className="inline-flex items-center px-8 text-white font-semibold text-lg"
          >
            ✨ {resource} ✨
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
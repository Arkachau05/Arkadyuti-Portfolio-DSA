import React from 'react';
import resume from ".././src/assets/Arkadyuti Chaudhuri Resume 1.pdf"

const ResumeSection = () => {
  return (
    <section className="py-20 bg-black text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">Resume & Website</h2>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          I’ve worked hard to develop my skills and knowledge in technology. Feel free to explore my resume and visit my website for more information about my projects and experiences.
        </p>

        <div className="flex justify-center space-x-8">
          {/* Resume Button */}
          <a 
            href={resume}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-yellow-500 text-black rounded-lg shadow-md text-xl font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out">
            View My Resume
          </a>

          {/* Website Button */}
          <a 
            href="https://portfolio-arkadyuti-chaudhuris-projects.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-yellow-500 text-black rounded-lg shadow-md text-xl font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out">
            Visit My Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

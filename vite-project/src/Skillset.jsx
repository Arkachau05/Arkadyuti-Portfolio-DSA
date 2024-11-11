 
import React from 'react';
import { FaJsSquare, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, FaPython } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-6xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-600 text-6xl" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: 'Java', icon: <FaJava className="text-red-700 text-6xl" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-300 text-6xl" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-400 text-6xl" /> },
];

const Skillset = () => {
  return (
    <section id="skills" className="py-20 px-8 bg-black text-center text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">My Skillset</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-white opacity-90">
          Here are some of the programming languages and tools I work with:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;

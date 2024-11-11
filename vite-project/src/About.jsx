import React from 'react'

const About = () => {
  return (
    <div>
       <section id="about" className="py-20 px-8 bg-black text-white relative overflow-hidden flex justify-center items-center">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black z-0"></div>

  {/* Content Container */}
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10 px-4">
    {/* Left Side Text Content */}
    <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
      <h2 className="text-6xl font-extrabold text-yellow-500 mb-6 leading-tight">
        About Me
      </h2>
      
      {/* About Me Text */}
      <p className="text-xl mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
        Hello! I’m a <span className="text-blue-500 font-semibold">Computer Science and Engineering student</span> with a passion for exploring the endless possibilities of <span className="text-green-500 font-semibold">technology</span>. My interests span from <span className="text-yellow-500 font-semibold">software development</span> and <span className="text-yellow-300">algorithms</span> to emerging fields like <span className="text-purple-500 font-semibold">artificial intelligence</span> and <span className="text-green-400 font-semibold">cybersecurity</span>.
      </p>

      <p className="text-xl mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
        I enjoy <span className="italic text-cyan-400">coding</span> and <span className="italic text-pink-400">problem-solving</span>, and I’m always looking to sharpen my skills through hands-on projects and team collaborations.
      </p>

      <p className="text-xl mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
        I’m also actively involved in <span className="text-orange-400">various tech-related clubs</span>, hackathons, and volunteer activities, where I get to apply my knowledge, work with like-minded individuals, and learn from others. Outside of my academic life, I enjoy <span className="italic text-pink-300">gaming, reading about tech trends, and playing sports</span>, which help me stay balanced and inspired.
      </p>

      <p className="text-xl mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
        I’m excited to continue learning, growing, and making a positive impact through <span className="text-green-500 font-semibold">technology</span>, and I look forward to contributing to innovative solutions that make a difference!
      </p>
      
      {/* Call to Action */}
      <div className="mt-8">
        <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Get in Touch
        </a>
      </div>
    </div>

    
  </div>
</section>
    </div>
  )
}

export default About

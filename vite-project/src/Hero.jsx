import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="h-screen bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-6xl font-bold mb-4 text-white">Hi, I'm Arkadyuti Chaudhuri</h1>
          <p className="text-xl mb-8 text-white">A passionate Web Developer and Programmer</p>
          <a href="#certificates" className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded-lg text-xl font-semibold transition duration-300">See My Certificates</a>
        </div>
      </section>
    </div>
  )
}

export default Hero

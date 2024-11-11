import React from 'react'
import img1 from "../src/assets/arkadyuti05 (3).png";
import img2 from "../src/assets/elabarko.jpg";
import img3 from "../src/assets/Hackerrank.png";
const Certificates = () => {
  return (
    <div>
      <section id="certificates" className="py-10 px-8 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8">My Certificates</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Certificate 1 */}
            <a href={img1} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition duration-300">
              <img src={img1} alt="Codechef Certificate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                Codechef Certificate
              </div>
            </a>
            {/* Certificate 2 */}
            <a href={img2} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition duration-300">
              <img src={img2} alt="Elabdheeraj Certificate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                Elab Certificate
              </div>
            </a>
            {/* Certificate 3 */}
            <a href={img3} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition duration-300">
              <img src={img3} alt="HackerRank Certificate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                HackerRank Certificate
              </div>
            </a>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Certificates

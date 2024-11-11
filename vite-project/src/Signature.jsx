import React from 'react'
import imgpic from ".././src/assets/Signature.jpg"
const Signature = () => {
  return (
    <div>
     <section className="flex flex-col items-center justify-center py-10 bg-black text-yellow-500">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Student Signature</h2>
      </div>

      {/* Signature Display */}
      <div className="flex flex-col items-center mt-6 bg-gray-800 p-6 rounded-lg shadow-md w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4">
        {/* Student Name */}
        <p className="text-xl font-bold text-yellow-400">Arkadyuti Cahudhuri</p>

        {/* Signature Image */}
        <div className="mt-4">
          <img
            src={imgpic} // Ensure the image is in the public folder or adjust the path as needed
            alt="Student Signature"
            className="w-32 h-auto"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Signature

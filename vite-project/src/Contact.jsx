import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-20 px-8 bg-black text-center">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-yellow-500 mb-8">Contact Me</h2>
    <p className="text-lg mb-6 text-white">Feel free to reach out for any opportunities, questions, or collaborations!</p>

    {/* Contact Information */}
    <div className="text-white mb-6">
      <p className="text-lg">
        <span className="font-semibold">Email:</span> <a href="mailto:arkadyutichaudhuri@gmail.com" className="text-yellow-500 hover:text-yellow-400">Arkadyutichaudhuri@gmail.com</a>
      </p>
      <p className="text-lg">
        <span className="font-semibold">Phone:</span> <a href="tel:+918336845655" className="text-yellow-500 hover:text-yellow-400">+91 8336845655</a>
      </p>
    </div>

    {/* Contact Details Design */}
    <div className="flex justify-center items-center gap-12">
      {/* Email Icon */}
      <div className="flex flex-col items-center">
        <a href="mailto:arkadyutichaudhuri@gmail.com" className="text-yellow-500 text-4xl hover:text-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.586 7.586a2 2 0 002.828 0L21 8M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
          </svg>
        </a>
        <p className="mt-2 text-white">Email</p>
      </div>

      {/* Phone Icon */}
      <div className="flex flex-col items-center">
        <a href="tel:+918336845655" className="text-yellow-500 text-4xl hover:text-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
          </svg>
        </a>
        <p className="mt-2 text-white">Phone</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact

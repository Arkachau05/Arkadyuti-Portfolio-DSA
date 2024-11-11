import React from 'react'
import pptdsa from "../src/assets/pptdsa.pptx"
const Ppt = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-black text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-500">Presentation</h2>
        <p className="text-lg mt-2 text-gray-400">
          Explore the presentation directly on this page.
        </p>
      </div>

      {/* Embedded PPT Viewer */}
      <div className="w-full md:w-10/12 lg:w-8/12 bg-gray-800 p-4 rounded-lg shadow-lg">
        {/* Embed iframe for PPT file */}
        <iframe
          src="https://docs.google.com/presentation/d/1BHgHH4oC5-jM5yjbLiPaP8LEdapg6C2z/edit?usp=sharing&ouid=104619793550173730516"
          title="Embedded Presentation"
          width="100%"
          height="500"
          className="rounded-lg border border-gray-700"
          allowFullScreen
        ></iframe>
      </div>

      {/* View Option */}
      <div className="mt-8">
        <a
          src="https://docs.google.com/presentation/d/1BHgHH4oC5-jM5yjbLiPaP8LEdapg6C2z/edit?usp=sharing&ouid=104619793550173730516"
          href="https://docs.google.com/presentation/d/1BHgHH4oC5-jM5yjbLiPaP8LEdapg6C2z/edit?usp=sharing&ouid=104619793550173730516"
          download
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-md transition duration-300"
        >
          Presentation
        </a>
      </div>
    </section>
  )
}

export default Ppt

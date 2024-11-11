import React from 'react'
import vdo from ".././src/assets/videodsa.mp4"
const Video = () => {
  return (
    <div>
       <section className="flex flex-col items-center justify-center py-16 bg-black text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-500">Video Presentation</h2>
        <p className="text-lg mt-2 text-gray-400">
          Watch our featured video presentation below.
        </p>
      </div>

      {/* Embedded Video Viewer */}
      <div className="w-full md:w-10/12 lg:w-8/12 bg-gray-800 p-4 rounded-lg shadow-lg">
        {/* Embed iframe for video file */}
        <iframe
          src={vdo}
          title="Embedded Video"
          width="100%"
          height="500"
          className="rounded-lg border border-gray-700"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Optional Download Option */}
      <div className="mt-8">
        <a
          href={vdo}
          download
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-md transition duration-300"
        >
          Download Video
        </a>
      </div>
    </section>
    </div>
  )
}

export default Video

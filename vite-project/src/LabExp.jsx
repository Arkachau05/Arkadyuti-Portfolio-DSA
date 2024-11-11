import React from 'react';
import lab from ".././src/assets/Labexp.jpg"
const LabExperiment = () => {
  return (
    <section className=" px-8 bg-black text-center text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">Lab Experiment</h2>

        <div className="flex justify-center">
          <img 
            src={lab} // Replace this URL with your image source
            alt="Lab Experiment" 
            className="rounded-lg shadow-lg w-full lg:w-[50vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default LabExperiment;

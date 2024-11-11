import React, { useState } from 'react';

const FloatingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close modal when clicking outside
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 w-16 h-16 bg-yellow-500 text-black rounded-full shadow-xl flex items-center justify-center text-2xl font-bold transition-transform transform hover:scale-110 hover:bg-yellow-600"
        aria-label="Open contact information"
      >
        <span className="text-3xl">💡</span> {/* Lightbulb Emoji */}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <div className="bg-white text-black p-2 rounded-xl w-80 sm:w-96 md:w-1/2 max-w-md shadow-lg transform transition-all duration-300 ease-in-out scale-105">
            <h3 id="modal-title" className="text-2xl font-semibold text-center text-gray-800 mb-4">
              Contact Information
            </h3>
            
            <div className="border-t-2 border-gray-200 my-2"></div>
            
            <div className="space-y-1 text-sm sm:text-base text-gray-700">
              <p className="font-semibold">Name:</p>
              <p className="text-gray-600">Arkadyuti Chaudhuri</p>

              <p className="font-semibold">Register No:</p>
              <p className="text-gray-600">RA2311003010931</p>
              
              <p className="font-semibold">SRM Mail:</p>
              <p className="text-gray-600">ac4236@srmist.edu.in</p>

              <p className="font-semibold">Department:</p>
              <p className="text-gray-600">CTECH</p>

              <p className="font-semibold">Semester:</p>
              <p className="text-gray-600">3</p>

              <p className="font-semibold">Subject Code:</p>
              <p className="text-gray-600">21CSC204J</p>

              <p className="font-semibold">Handled by:</p>
              <p className="text-gray-600">Dr. Ajanthaa Lakkshmanan</p>
            </div>

            <button 
              onClick={toggleModal} 
              className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600 w-full mt-4 transition duration-300 ease-in-out"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButton;

import React from 'react';

const Skillset2 = () => {
  return (
    <section id="skills" className="py-20 px-8 bg-black text-center text-white">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-500 mb-12">Skills and Expertise</h2>

        {/* Skills Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Linear Data Structures */}
          <div className="relative flex flex-col items-center p-6 bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-4 rounded-full bg-black bg-opacity-70 mb-6">
              <span className="text-yellow-500 text-4xl">📜</span>
            </div>
            <p className="text-lg font-semibold text-white">Linear Data Structures</p>
          </div>

          {/* Non-linear Data Structures */}
          <div className="relative flex flex-col items-center p-6 bg-gradient-to-r from-green-700 to-green-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-4 rounded-full bg-black bg-opacity-70 mb-6">
              <span className="text-yellow-500 text-4xl">🔗</span>
            </div>
            <p className="text-lg font-semibold text-white">Non-linear Data Structures</p>
          </div>

          {/* Trees */}
          <div className="relative flex flex-col items-center p-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-4 rounded-full bg-black bg-opacity-70 mb-6">
              <span className="text-yellow-500 text-4xl">🌳</span>
            </div>
            <p className="text-lg font-semibold text-white">Trees</p>
          </div>

          {/* Graphs */}
          <div className="relative flex flex-col items-center p-6 bg-gradient-to-r from-purple-700 to-purple-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-4 rounded-full bg-black bg-opacity-70 mb-6">
              <span className="text-yellow-500 text-4xl">🌐</span>
            </div>
            <p className="text-lg font-semibold text-white">Graphs</p>
          </div>

          {/* Linked List */}
          <div className="relative flex flex-col items-center p-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-4 rounded-full bg-black bg-opacity-70 mb-6">
              <span className="text-yellow-500 text-4xl">🔗</span>
            </div>
            <p className="text-lg font-semibold text-white">Linked List</p>
          </div>

          {/* Doubly Linked List */}
          <div className="relative flex flex-col items-center p-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-4 rounded-full bg-black bg-opacity-70 mb-6">
              <span className="text-yellow-500 text-4xl">🔄</span>
            </div>
            <p className="text-lg font-semibold text-white">Doubly Linked List</p>
          </div>

          {/* Stack */}
          <div className="relative flex flex-col items-center p-6 bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-4 rounded-full bg-black bg-opacity-70 mb-6">
              <span className="text-yellow-500 text-4xl">🗄️</span>
            </div>
            <p className="text-lg font-semibold text-white">Stack</p>
          </div>

          {/* Queue */}
          <div className="relative flex flex-col items-center p-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-4 rounded-full bg-black bg-opacity-70 mb-6">
              <span className="text-yellow-500 text-4xl">📥</span>
            </div>
            <p className="text-lg font-semibold text-white">Queue</p>
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="flex flex-col items-center justify-center mt-12">
          <p className="text-xl mb-6 max-w-4xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
            Over the course of my studies, I’ve gained a strong foundation in <span className="text-blue-500 font-semibold">Linear Data Structures</span>, including arrays and linked lists, and developed an understanding of <span className="text-green-500 font-semibold">Non-linear Data Structures</span> like trees and graphs. I have hands-on experience with <span className="text-yellow-500 font-semibold">Trees</span>, implementing binary trees, AVL trees, and more. I've also worked on <span className="text-yellow-300">Graph Theory</span> algorithms, which allow me to solve real-world problems using traversal and shortest path techniques.
          </p>
          <p className="text-xl mb-6 max-w-4xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
            My expertise includes creating efficient <span className="text-purple-500 font-semibold">Stacks and Queues</span> for task scheduling and processing, along with deep understanding and implementation of <span className="text-green-400 font-semibold">Doubly Linked Lists</span>. I am adept at solving complex problems using <span className="text-red-500 font-semibold">Algorithms</span> and optimizing them for time and space complexity. I am continuously exploring new data structures and algorithms to improve my problem-solving skills and broaden my knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skillset2;

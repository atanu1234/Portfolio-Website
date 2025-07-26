// src/components/HomePage.js
import React from 'react';
import profilePic from '../Assets/Atanu.jpg'; // Your profile picture

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: "url('../')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="z-10 text-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold">Hello, I'm <span className="text-blue-400">[Your Name]</span></h1>
          <p className="text-lg md:text-2xl mt-4">Full Stack Developer | Building modern web applications</p>
          <a href="#projects"
             className="mt-8 inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
            View My Work
          </a>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-gray-900 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg md:text-xl mb-8">
            I am a full-stack developer passionate about creating responsive, user-friendly websites and web applications.
            Skilled in React, JavaScript, Node.js, and more. I love solving complex problems and collaborating with clients to
            bring ideas to life.
          </p>
          <a href="#contact" className="bg-blue-500 text-white py-3 px-8 rounded-md shadow hover:bg-blue-600 transition-all">Contact Me</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-800 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Project 1</h3>
              <p className="text-gray-400 mb-4">A brief description of Project 1. This project uses React, Node.js, and MongoDB.</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">View Project</a>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Project 2</h3>
              <p className="text-gray-400 mb-4">A brief description of Project 2. This project uses JavaScript, Express, and PostgreSQL.</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">View Project</a>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-gray-900 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg md:text-xl mb-8">
            I'm currently available for freelance work or full-time positions. Feel free to reach out!
          </p>
          <a href="mailto:your-email@example.com" className="bg-blue-500 text-white py-3 px-8 rounded-md shadow hover:bg-blue-600 transition-all">
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

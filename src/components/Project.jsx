import React from 'react';

const projects = [
  {
    title: 'Spotify Clone',
    description: 'Developed a full-featured Spotify Clone web application replicating the core functionalities of the original Spotify platform. The project includes features like user-friendly UI, responsive design, music playback, playlists, and interactive navigation.',
    link: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Portfolio Website',
    description: 'This is a brief description of Project 2.',
    link: 'https://github.com/yourusername/project2'
  },
  {
    title: 'Brain Tumor Detection Model',
    description: 'This is a brief description of Project 3.',
    link: 'https://github.com/yourusername/project3'
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

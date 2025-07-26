import React from "react";
import Home from "./Home";
const About = () => {
  return (
    <>
      <section className="bg-green-100 text-gray-800 py-12 px-4 md:px-12 lg:px-24 w-full">
        <div className="max-w-7xl mx-auto border-2">
          {/* Introduction with Image */}
          <div className="flex flex-col md:flex-row items-center mb-12 ">
            <div className="w-1/2 mb-6 md:mb-0">
              <img
                src="Images/Atanu.jpg" // Replace this with the URL of your image
                alt="Your Profile"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-contain border-2 border-gray-800"
              />
            </div>
            <div className="w-1/2 text-center md:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                About Me
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Hi, I'm Atanu Khanrah, a full-stack developer with a passion for
                building web applications that blend elegant design with robust
                functionality
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-12">
            {/* School Information */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
                Education
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">
                    10th Grade - Jasorajpur Srinath Charan Vidyayatan
                  </h3>
                  <p className="text-gray-700">Year of Completion: 2019</p>
                  <p className="text-gray-700">
                    Board: West Bengal Board of Secondary Education (WBBSE)
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">
                    12th Grade - Jasorajpur Srinath Charan Vidyayatan
                  </h3>
                  <p className="text-gray-700">Year of Completion: 2021</p>
                  <p className="text-gray-700">
                    Board: West Bengal Board of Secondary Education (WBCHSE)
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">
                    College - Adamas University
                  </h3>
                  <p className="text-gray-700">
                    Degree: Bachelor of Technology in Computer Science
                  </p>
                  <p className="text-gray-700">Year of Completion: 2025</p>
                  <p className="text-gray-700">
                    University: Adamas University (UGC)
                  </p>
                </div>
              </div>
            </div>

            {/* Values and Approach Section */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
                My Values & Approach
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <p className="text-lg text-gray-700 text-justify">
                  I believe in creating web applications that seamlessly blend
                  aesthetics and functionality. Writing clean, efficient, and
                  maintainable code is a priority, ensuring performance and
                  scalability across different platforms.
                </p>
                <p className="text-lg text-gray-700 text-justify">
                  My approach to problem-solving involves breaking down complex
                  issues into actionable steps, which helps in delivering
                  reliable, secure, and scalable solutions. I value
                  collaboration and clear communication, which enables me to
                  align my work with both client expectations and user needs.
                </p>
                <p className="text-lg text-gray-700 text-justify">
                  Staying updated with the latest technologies and trends in
                  full-stack development is essential to my continuous growth as
                  a developer. My goal is to develop applications that deliver
                  an exceptional user experience while adhering to best coding
                  practices.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

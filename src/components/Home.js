import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import About2 from "./About2";
// import { useState } from "react";
// import OpenPdfButton from "..\components2\OpenPdfButton.jsx";




const Home = () => {
  return (
    <>
      {/************************this section is for home page *****************/}
      <section className=" HomeBannerArea h-screen w-full lg:flex bg-[#b6e2fa]  ml-0 ">
        {/* <!-------------------- "home_banner_area" section is use for first section---------------- --> */}
        <div className="Home_Banner_Box-1 w-full mx-auto min-h-max mt-10 lg:my-0  lg:w-1/2 lg:h-screen m-0 ">
          <div className=" hidden my-0 lg:flex lg:ml-20 lg:mt-28">
            <h3 className="uppercase lg: text-3xl font-normal">Hello</h3>
            {/* <hr className=" lg: w-1/2 h-1"></hr> */}
            <hr className=" lg: w-8/12 font-normal h-[3px] mx-10 my-5  bg-gray-700"></hr>
          </div>
          <div className=" mx-auto my-0 max-w-max lg:flex lg:ml-20 lg:my-5 ">
            <h1 className="uppercase text-2xl lg:text-5xl">
              I am atanu khanrah
            </h1>
          </div>
          <div className="lg: flex mx-auto my-2 lg:my-5 max-w-max">
            <h5 className="uppercase lg: text-xl font-normal">
              Computer Science Engineer
            </h5>
          </div>
          <div className="buttons max-w-max mx-auto my-10">
            {/* This className is for buttons */}

            <Link to="../components2/Resume.js">
              <button className="w-36 h-max lg:w-48 lg:h-12 bg-gradient-to-r from-[#854fee] to-[#4458dc] hover:from-[#4458dc] hover:to-purple-500 text-white font-bold px-4 py-2 rounded">
                COVER LETTER
              </button>
            </Link>

            <Link to="../components2/Resume.js">
              <button className="w-36 lg:w-48 lg:h-12 ml-10 bg-gradient-to-r from-[#854fee] to-[#4458dc] hover:from-[#4458dc] hover:to-purple-500 text-white font-bold px-4 py-2 rounded">
                RESUME
              </button>
            </Link>
          </div>
        </div>
        <div className="Home_Banner_Box-2 w-full block my-10 lg:my-0 min-h-max lg:w-1/2 lg:flex lg:justify-center lg:items-center ">
          <img
            className="profile_photo w-11/12 mx-auto border-4 border-purple-800 lg:w-4/6 rounded-3xl "
            src="Images/profile_photo.jpg"
            alt=""
          />
        </div>
      </section>

      {/* **************************** this section is for about section************************** */}

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
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-lg md:text-xl text-gray-700">
            Hi, I'm Atanu Khanrah, a full-stack developer with a passion for building web applications that blend elegant design with robust functionality
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-12">
          {/* School Information */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">Education</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">10th Grade - Jasorajpur Srinath Charan Vidyayatan</h3>
                <p className="text-gray-700">Year of Completion: 2019</p>
                <p className="text-gray-700">Board: West Bengal Board of Secondary Education (WBBSE)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">12th Grade - Jasorajpur Srinath Charan Vidyayatan</h3>
                <p className="text-gray-700">Year of Completion: 2021</p>
                <p className="text-gray-700">Board: West Bengal Board of Secondary Education (WBCHSE)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">College - Adamas University</h3>
                <p className="text-gray-700">Degree: Bachelor of Technology in Computer Science</p>
                <p className="text-gray-700">Year of Completion: 2025</p>
                <p className="text-gray-700">University: Adamas University (UGC)</p>
              </div>
            </div>
          </div>

          {/* Values and Approach Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">My Values & Approach</h2>
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <p className="text-lg text-gray-700 text-justify">
              I believe in creating web applications that seamlessly blend aesthetics and functionality. Writing clean, efficient, and maintainable code is a priority, ensuring performance and scalability across different platforms.
              </p>
              <p className="text-lg text-gray-700 text-justify">
              My approach to problem-solving involves breaking down complex issues into actionable steps, which helps in delivering reliable, secure, and scalable solutions. I value collaboration and clear communication, which enables me to align my work with both client expectations and user needs.
              </p>
              <p className="text-lg text-gray-700 text-justify">
              Staying updated with the latest technologies and trends in full-stack development is essential to my continuous growth as a developer. My goal is to develop applications that deliver an exceptional user experience while adhering to best coding practices.
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

{/* ********************************************* */}

    </>
  );
};
export default Home;

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Home = () => {
  return (
    <>
      <section className=" HomeBannerArea inline-block h-screen w-full lg:flex bg-[#a0deff]  ml-0 ">
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
              Full Stack Developer
            </h5>
          </div>
          <div className=" buttons max-w-max mx-auto my-10 ">
            {/* <!-- this className is for buton------------------- --> */}
            <Link to="../components2/Resume.js ">
              {" "}
              <button class=" w-36 h-max lg:w-48 lg:h-12 bg-gradient-to-r from-[#854fee] to-[#4458dc] hover:from-[#4458dc] to-[ #854fee] hover:to-purple-500 text-white font-bold px-4 py-2 rounded">
                COVER LETTER
              </button>
            </Link>
            <Link to="">
              <button class=" w-36 lg:w-48 lg:h-12 ml-10 bg-gradient-to-r from-[#854fee] to-[#4458dc] hover:from-[#4458dc] to-[ #854fee] hover:to-purple-500 text-white font-bold px-4 py-2 rounded">
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

    </>
  );
};
export default Home;

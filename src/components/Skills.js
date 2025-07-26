import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa"; // or choose another design-related icon
import { FaProjectDiagram } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


// Skills data
const skills = [


{
    name: "Web Design",
    level: "Intermediate",
    icon: <FaLaptopCode className="text-pink-500" />,
  },

{
  name: "Software Design",
  level: "Intermediate",
  icon: <FaProjectDiagram className="text-indigo-600" />,
},


{
  name: "Software Development",
  level: "Expert",
  icon: <FaCode className="text-purple-700" />,
},


  {
    name: "HTML",
    level: "Expert",
    icon: <FaHtml5 className="text-orange-600" />,
  },
  {
    name: "CSS",
    level: "Expert",
    icon: <FaCss3Alt className="text-blue-600" />,
  },
  {
    name: "JavaScript",
    level: "Expert",
    icon: <FaJs className="text-yellow-500" />,
  },
  {
    name: "React",
    level: "Intermediate",
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: <FaNodeJs className="text-green-600" />,
  },
  {
    name: "Python",
    level: "Intermediate",
    icon: <FaPython className="text-blue-500" />,
  },
  {
    name: "Java",
    level: "Intermediate",
    icon: <FaJava className="text-red-600" />,
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    icon: <SiTailwindcss className="text-sky-400" />,
  },


];

// Color mapping
const levelColor = {
  Expert: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
};

const SkillsSection = () => {
  return (
    <section className="bg-[#dcbffa] py-16 min-h-screen">
      {/* <div className="bg-purple-500"> */}
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            My Skills
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Domains I am work with
          </p>
        {/* </div> */}
        {/* Fixed 3 columns layout */}
        <div className="grid grid-cols-3 gap-6 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <span className="text-xl font-semibold text-gray-800">
                {skill.name}
              </span>
              <span
                className={`mt-2 px-3 py-1 text-sm rounded-full font-medium ${
                  levelColor[skill.level]
                }`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

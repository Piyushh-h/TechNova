import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import teamImage1 from "../assets/teamimage1.webp";
import teamImage2 from "../assets/teamimage2.jpg";
import teamImage3 from "../assets/teamimage3.avif";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: teamImage1,
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: teamImage2,
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: teamImage3,
  },
];

function About() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className={`text-3xl font-extrabold sm:text-4xl text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          About TechNova Innovations
        </h2>

        {/* Mission Section */}
        <div className="mb-16">
          <h3 
            className={`text-2xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our Mission
          </h3>
          <p className={`text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            At TechNova Innovations, our mission is to empower businesses with cutting-edge technology solutions that
            drive growth, efficiency, and innovation. We strive to be at the forefront of technological advancements,
            delivering tailored solutions that meet the unique needs of our clients.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <h3 
            className={`text-2xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our Vision
          </h3>
          <p className={`text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            We envision a world where technology seamlessly integrates with every aspect of business, enhancing
            productivity and creating new opportunities. TechNova Innovations aims to be a global leader in providing
            innovative tech solutions that shape the future of industries worldwide.
          </p>
        </div>

        {/* Team Section */}
        <h3 
          className={`text-2xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Our Team
        </h3>
        
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`group rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* Image Container with fixed aspect ratio */}
              <div className="relative w-full pt-[100%]"> {/* 1:1 aspect ratio */}
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="absolute top-0 left-0 w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h4 
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h4>
                <p 
                  className={`text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
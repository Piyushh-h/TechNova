import React from "react"
import { Link } from "react-router-dom"
import TestimonialSlider from "../components/TestimonialSlider"
import { useTheme } from "../contexts/ThemeContext"

function Home() {
  const { darkMode } = useTheme()

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className={`block ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>TechNova Innovations</span>
          </h1>
          <p
            className={`mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ${darkMode ? "text-gray-300" : "text-gray-500"}`}
          >
            Empowering businesses with cutting-edge technology solutions. We bring your ideas to life.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/services"
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${darkMode ? "text-white bg-indigo-600 hover:bg-indigo-700" : "text-white bg-indigo-600 hover:bg-indigo-700"} md:py-4 md:text-lg md:px-10`}
              >
                Get Started
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="/about"
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${darkMode ? "text-indigo-600 bg-white hover:bg-gray-50" : "text-indigo-600 bg-white hover:bg-gray-50"} md:py-4 md:text-lg md:px-10`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSlider />
    </div>
  )
}

export default Home


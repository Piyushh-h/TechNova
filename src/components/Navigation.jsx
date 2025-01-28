import React from "react"
import { Link } from "react-router-dom"
import SunIcon from "./SunIcon"
import MoonIcon from "./MoonIcon"
import { useTheme } from "../contexts/ThemeContext"

function Navigation() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <nav className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className={`text-2xl font-bold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
              TechNova
            </Link>
          </div>
          <div className="flex">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"}`}
            >
              Contact
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"} focus:outline-none`}
          >
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation


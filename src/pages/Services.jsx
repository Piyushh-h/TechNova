import React from "react"
// import { CodeIcon, CloudIcon, ChipIcon } from "@heroicons/react/outline"
import { useTheme } from "../contexts/ThemeContext"

const services = [
  {
    title: "Web Development",
    description: "We create responsive and user-friendly websites tailored to your needs.",
    // icon: CodeIcon,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to power your business.",
    // icon: CloudIcon,
  },
  {
    title: "AI/ML Services",
    description: "Harness the power of artificial intelligence and machine learning for your projects.",
    // icon: ChipIcon,
  },
]

function Services() {
  const { darkMode } = useTheme()

  return (
    <div className={darkMode ? "bg-gray-900" : "bg-gray-50"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className={`text-3xl font-extrabold sm:text-4xl text-center mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="px-4 py-5 sm:p-6">
                {/* <service.icon className={`h-12 w-12 mb-4 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`} /> */}
                <h3 className={`text-lg font-medium mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {service.title}
                </h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-500"}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services


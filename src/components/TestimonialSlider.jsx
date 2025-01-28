import React, { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    content: "TechNova Innovations transformed our business with their cutting-edge solutions. Highly recommended!",
    author: "John Smith",
    company: "Tech Solutions Inc.",
  },
  {
    id: 2,
    content: "The team at TechNova is incredibly skilled and professional. They delivered beyond our expectations.",
    author: "Sarah Johnson",
    company: "Digital Dynamics",
  },
  {
    id: 3,
    content: "Working with TechNova was a game-changer for our startup. Their expertise in AI is unmatched.",
    author: "Michael Brown",
    company: "AI Ventures",
  },
]

function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">What Our Clients Say</h2>
          <div className="mt-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <blockquote className="text-xl text-gray-500 dark:text-gray-300 italic mb-4">
                  "{testimonial.content}"
                </blockquote>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider


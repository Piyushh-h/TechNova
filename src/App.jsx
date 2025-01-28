import React from "react"
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    

    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App


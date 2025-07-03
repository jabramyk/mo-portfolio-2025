"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Adventure" }, // Changed from "Projects" to "Adventure"
  { id: "skills", label: "Skills" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="space-y-3">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? "bg-green-400 border-green-400 scale-125"
                : "bg-transparent border-gray-600 hover:border-green-400"
            }`}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            title={section.label}
          />
        ))}
      </div>
    </div>
  )
}

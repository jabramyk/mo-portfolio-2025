"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    school: "Old Dominion University",
    degree: "B.S. in Computer Science",
    status: "Currently enrolled",
    current: true,
  },
  {
    school: "Tidewater Community College",
    degree: "A.S. in Computer Science",
    graduated: "Dec 2024",
    current: false,
  },
]

export default function Education() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-green-400 text-sm mb-4">$ cat education.log</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                className="border border-gray-700 p-6 rounded-lg bg-gray-900/50 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {edu.current && (
                  <div className="absolute top-0 right-0 bg-green-400 text-black px-3 py-1 text-xs font-semibold">
                    CURRENT
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                </div>

                <p className="text-lg text-gray-300 mb-4">{edu.degree}</p>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar size={16} />
                  <span>{edu.current ? edu.status : `Graduated ${edu.graduated}`}</span>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-green-400"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

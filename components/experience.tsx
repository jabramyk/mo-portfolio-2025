"use client"

import { motion } from "framer-motion"
import { Trophy, Calendar, Code } from "lucide-react"

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-green-400 text-sm mb-4">$ ls experience/</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-green-400"></div>

            <div className="space-y-12">
              <motion.div
                className="relative pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full -translate-x-1/2"></div>

                <div className="border border-gray-700 p-6 rounded-lg bg-black/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="text-green-400" size={20} />
                    <h3 className="text-xl font-semibold">Software Developer Intern</h3>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>Fall 2024</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="text-yellow-400" size={16} />
                      <span className="text-yellow-400 font-semibold">1st Place Achievement</span>
                    </div>
                    <p className="text-gray-300">
                      Won 1st place out of 13 teams for best final app, demonstrating exceptional problem-solving and
                      development skills.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-green-400">Tech Stack Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["TypeScript", "Supabase", "React", "Neon", "Gemini", "Hugging Face"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-800 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

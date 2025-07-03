"use client"

import { motion } from "framer-motion"
import { Code, Server, Brain, Wrench } from "lucide-react"
import Inspectable from "./inspectable"

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TailwindCSS", "Vite", "Framer Motion"],
    color: "text-blue-400",
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Supabase", "PostgreSQL", "MongoDB"],
    color: "text-green-400",
  },
  {
    id: "ai",
    title: "AI Tools",
    icon: Brain,
    skills: ["Gemini 2.0", "Groq", "Hugging Face"],
    color: "text-purple-400",
  },
  {
    id: "other",
    title: "Other",
    icon: Wrench,
    skills: ["Firebase", "Git", "GitHub API", "PayPal Integration", "RapidAPI"],
    color: "text-yellow-400",
  },
]

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-green-400 text-sm mb-4">$ cat skills.json | jq '.'</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Inspectable key={category.title} elementId={`skills-${category.id}`}>
                <motion.div
                  className="border border-gray-700 p-6 rounded-lg bg-gray-900/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className={category.color} size={20} />
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Inspectable>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

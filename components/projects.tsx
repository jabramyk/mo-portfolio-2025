"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Zap, Brain, BarChart3 } from "lucide-react"
import Inspectable from "./inspectable"

const projects = [
  {
    id: "edusphere",
    name: "EduSphere AI",
    description:
      "Comprehensive student platform with AI-powered assignment assistance, blog generation, and calendar integration.",
    stack: ["Next.js", "Supabase", "Gemini", "TailwindCSS"],
    features: [
      "Student dashboard with assignment assistant",
      "Blog generator",
      "Calendar + subscription integration",
      "Multi-platform support (Substack, Medium)",
    ],
    icon: Brain,
    color: "text-blue-400",
  },
  {
    id: "interview",
    name: "Interview Prep AI",
    description:
      "AI-powered interview preparation platform with voice and text mock interviews, resume analysis, and progress tracking.",
    stack: ["Next.js", "PostgreSQL", "Gemini", "Firebase", "PayPal"],
    features: [
      "AI mock interviews (voice + text)",
      "Resume & job match analysis",
      "Progress tracking",
      "User-created interview sharing",
    ],
    icon: Zap,
    color: "text-green-400",
  },
  {
    id: "content",
    name: "AI Content Generator",
    description:
      "Advanced content generation platform with sentiment analysis, keyword optimization, and comprehensive analytics.",
    stack: ["Next.js 14", "Supabase", "Gemini", "Hugging Face", "Recharts"],
    features: [
      "Generate blog/social/product content",
      "Sentiment & keyword analysis",
      "Analytics dashboard",
      "API access + tiered subscriptions",
    ],
    icon: BarChart3,
    color: "text-purple-400",
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-green-400 text-sm mb-4">$ ls projects/ --detailed</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Inspectable key={project.name} elementId={`project-${project.id}`}>
                <motion.div
                  className="border border-gray-700 rounded-lg bg-black/50 overflow-hidden group hover:border-green-400/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <project.icon className={project.color} size={24} />
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-green-400">Key Features:</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2 text-green-400">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-800 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-400 text-black rounded hover:bg-green-300 transition-colors text-sm font-medium">
                        <ExternalLink size={16} />
                        Live Demo
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded hover:border-gray-500 transition-colors text-sm">
                        <Github size={16} />
                        Code
                      </button>
                    </div>
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

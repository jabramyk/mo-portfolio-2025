"use client"

import { motion } from "framer-motion"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"
import { useState } from "react"

// Mock data - replace with actual GitHub API integration
const mockRepos = [
  {
    name: "edusphere-ai",
    description: "AI-powered educational platform with assignment assistance and blog generation",
    stars: 24,
    forks: 8,
    language: "TypeScript",
    url: "https://github.com/MeeksonJr/edusphere-ai",
  },
  {
    name: "interview-prep-ai",
    description: "Mock interview platform with AI-powered feedback and resume analysis",
    stars: 18,
    forks: 5,
    language: "JavaScript",
    url: "https://github.com/MeeksonJr/interview-prep-ai",
  },
  {
    name: "ai-content-generator",
    description: "Advanced content generation with sentiment analysis and analytics",
    stars: 31,
    forks: 12,
    language: "TypeScript",
    url: "https://github.com/MeeksonJr/ai-content-generator",
  },
  {
    name: "portfolio-2025",
    description: "Creative terminal-inspired portfolio built with Next.js and Framer Motion",
    stars: 15,
    forks: 3,
    language: "TypeScript",
    url: "https://github.com/MeeksonJr/portfolio-2025",
  },
]

export default function GitHubShowcase() {
  const [repos, setRepos] = useState(mockRepos)

  // TODO: Implement actual GitHub API integration
  // useEffect(() => {
  //   const fetchRepos = async () => {
  //     try {
  //       const response = await fetch('/api/github-repos')
  //       const data = await response.json()
  //       setRepos(data)
  //     } catch (error) {
  //       console.error('Failed to fetch repos:', error)
  //     }
  //   }
  //   fetchRepos()
  // }, [])

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-green-400 text-sm mb-4">$ git log --oneline --graph</div>
          <div className="flex items-center gap-3 mb-12">
            <Github className="text-white" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold">GitHub Showcase</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                className="border border-gray-700 p-6 rounded-lg bg-black/50 hover:border-green-400/50 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-green-400 group-hover:text-green-300 transition-colors">
                    {repo.name}
                  </h3>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{repo.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{repo.forks}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">{repo.language}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/MeeksonJr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors"
            >
              <Github size={20} />
              View All Repositories
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

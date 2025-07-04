"use client"

import { motion } from "framer-motion"
import { Terminal, Coffee, Heart, Github, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("")
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "America/New_York",
        }),
      )
    }

    const updateUptime = () => {
      setUptime((prev) => prev + 1)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 1000)
    const uptimeInterval = setInterval(updateUptime, 1000)

    return () => {
      clearInterval(timeInterval)
      clearInterval(uptimeInterval)
    }
  }, [])

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const systemStats = [
    { label: "LOCATION", value: "Norfolk, VA", icon: "📍" },
    { label: "STATUS", value: "Available", icon: "🟢" },
    { label: "COFFEE", value: "∞", icon: "☕" },
    { label: "UPTIME", value: formatUptime(uptime), icon: "⏱️" },
  ]

  return (
    <footer className="relative py-12 px-4 border-t border-gray-800 overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-px h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-green-400"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Terminal Header */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Terminal className="text-green-400" size={20} />
            <span className="text-green-400 font-mono text-sm">system@mohameddatt.com</span>
          </div>
          <div className="ml-auto text-green-400 font-mono text-xs">{currentTime} EST</div>
        </motion.div>

        {/* System Information */}
        <motion.div
          className="bg-black/50 border border-green-400/30 rounded-lg p-6 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-green-400 font-mono text-xs mb-1">{stat.label}</div>
                <div className="text-white font-mono text-sm">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Command Line Interface */}
        <motion.div
          className="bg-gray-900/50 border border-green-400/20 rounded-lg p-4 mb-8 font-mono text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="text-green-400">$ cat /about/mohamed.txt</div>
            <div className="text-gray-300 pl-4">{">"} Full Stack Developer | AI Enthusiast | Problem Solver</div>
            <div className="text-gray-300 pl-4">
              {">"} From Guinea 🇬🇳 to Norfolk 🇺🇸 - Building the future, one line at a time
            </div>
            <div className="text-green-400">$ echo "Thanks for visiting!"</div>
            <div className="text-gray-300 pl-4">{">"} Thanks for visiting!</div>
            <div className="flex items-center gap-1 text-green-400">
              <span>$ exit 0</span>
              <motion.span
                className="bg-green-400 w-2 h-4 inline-block ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </div>
        </motion.div>

        {/* Social Links & Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Connect */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-green-400 font-mono text-sm mb-3">QUICK_CONNECT:</h3>
            <div className="space-y-2">
              <motion.a
                href="mailto:d.mohamed1504@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-sm font-mono"
                whileHover={{ x: 5 }}
              >
                <Mail size={16} />
                <span>EMAIL</span>
              </motion.a>
              <motion.a
                href="https://github.com/MeeksonJr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-sm font-mono"
                whileHover={{ x: 5 }}
              >
                <Github size={16} />
                <span>GITHUB</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohamed-datt-b60907296"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-sm font-mono"
                whileHover={{ x: 5 }}
              >
                <Linkedin size={16} />
                <span>LINKEDIN</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-green-400 font-mono text-sm mb-3">TECH_STACK:</h3>
            <div className="space-y-1 text-xs font-mono text-gray-400">
              <div>Next.js • React • TypeScript</div>
              <div>TailwindCSS • Framer Motion</div>
              <div>Gemini AI • Groq • Supabase</div>
              <div>Vercel • Git • VS Code</div>
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-green-400 font-mono text-sm mb-3">FUN_FACTS:</h3>
            <div className="space-y-1 text-xs font-mono text-gray-400">
              <div>🎓 TCC → ODU Computer Science</div>
              <div>🏆 1st Place Internship Winner</div>
              <div>📺 Learned English from Dora</div>
              <div>🌍 Guinea → NYC → Norfolk</div>
            </div>
          </motion.div>
        </div>

        {/* Copyright & Credits */}
        <motion.div
          className="text-center space-y-4 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="text-red-400" size={16} />
            <span>and lots of</span>
            <Coffee className="text-yellow-600" size={16} />
            <span>by Mohamed Datt</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs font-mono text-gray-500">
            <span>© 2025 Mohamed Datt</span>
            <span>•</span>
            <span>Next.js 15</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Deployed on Vercel</span>
          </div>

          <motion.div
            className="text-gray-500 text-xs italic"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            "From Guinea to Norfolk, from cartoons to code - the journey continues..."
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

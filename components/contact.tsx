"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Terminal, Code, Zap } from 'lucide-react'
import { useActionState, useState } from "react"
import { submitContactForm } from "@/app/actions/contact"

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [terminalText, setTerminalText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  // Blinking cursor effect
  useState(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  })

  const terminalCommands = [
    "$ whoami",
    "> Mohamed Datt - Full Stack Developer",
    "$ location",
    "> Norfolk, Virginia, USA",
    "$ status",
    "> Available for opportunities",
    "$ contact --help",
    "> Ready to connect! 🚀"
  ]

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Terminal Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-green-400/20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-yellow-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="text-green-400" size={20} />
              <span className="text-green-400 font-mono text-sm">contact@mohameddatt.com</span>
            </div>
          </div>

          {/* Terminal Command Line */}
          <motion.div
            className="bg-black/50 border border-green-400/30 rounded-lg p-4 mb-8 font-mono text-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-1">
              {terminalCommands.map((cmd, i) => (
                <motion.div
                  key={i}
                  className={cmd.startsWith('$') ? 'text-green-400' : 'text-gray-300'}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  {cmd}
                </motion.div>
              ))}
              <div className="flex items-center gap-1 text-green-400">
                <span>$ connect --interactive</span>
                {showCursor && <span className="bg-green-400 w-2 h-4 inline-block ml-1"></span>}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Info Panel */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Connection Status */}
              <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">CONNECTION_STATUS: ONLINE</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ready to collaborate?</h3>
                <p className="text-gray-300 leading-relaxed">
                  From Guinea to Norfolk, I've built a journey in code. Whether you have a project in mind, 
                  want to discuss AI and web development, or just connect with a fellow developer who learned 
                  English from Dora the Explorer - let's chat! 🚀
                </p>
              </div>

              {/* Connection Endpoints */}
              <div className="space-y-4">
                <div className="text-green-400 font-mono text-sm mb-3">AVAILABLE_ENDPOINTS:</div>
                
                <motion.div
                  className="flex items-center gap-3 p-3 bg-gray-900/30 rounded border border-gray-700 hover:border-green-400/50 transition-colors"
                  whileHover={{ x: 5, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                >
                  <MapPin className="text-green-400 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-gray-400 text-xs font-mono">LOCATION</div>
                    <span className="text-sm">Norfolk, Virginia, USA</span>
                  </div>
                </motion.div>

                <motion.a
                  href="mailto:d.mohamed1504@gmail.com"
                  className="flex items-center gap-3 p-3 bg-gray-900/30 rounded border border-gray-700 hover:border-green-400/50 transition-colors group"
                  whileHover={{ x: 5, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                >
                  <Mail className="text-green-400 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-gray-400 text-xs font-mono">EMAIL</div>
                    <span className="text-sm group-hover:text-green-400 transition-colors break-all">
                      d.mohamed1504@gmail.com
                    </span>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/MeeksonJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-900/30 rounded border border-gray-700 hover:border-green-400/50 transition-colors group"
                  whileHover={{ x: 5, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                >
                  <Github className="text-green-400 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-gray-400 text-xs font-mono">GITHUB</div>
                    <span className="text-sm group-hover:text-green-400 transition-colors">
                      github.com/MeeksonJr
                    </span>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/mohamed-datt-b60907296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-900/30 rounded border border-gray-700 hover:border-green-400/50 transition-colors group"
                  whileHover={{ x: 5, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                >
                  <Linkedin className="text-green-400 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-gray-400 text-xs font-mono">LINKEDIN</div>
                    <span className="text-sm group-hover:text-green-400 transition-colors">
                      mohamed-datt-b60907296
                    </span>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Message Terminal */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Terminal Window */}
              <div className="bg-black/80 border border-green-400/30 rounded-lg overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-green-400/20">
                  <div className="flex items-center gap-2">
                    <Code className="text-green-400" size={16} />
                    <span className="text-green-400 font-mono text-sm">message.send()</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                </div>

                {/* Success/Error Messages */}
                {state && (
                  <motion.div
                    className={`mx-4 mt-4 p-3 rounded border font-mono text-sm ${
                      state.success
                        ? "bg-green-900/30 border-green-500/50 text-green-200"
                        : "bg-red-900/30 border-red-500/50 text-red-200"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center gap-2">
                      {state.success ? (
                        <CheckCircle size={16} className="text-green-400" />
                      ) : (
                        <AlertCircle size={16} className="text-red-400" />
                      )}
                      <span className="text-xs">
                        {state.success ? "SUCCESS:" : "ERROR:"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs opacity-90">
                      {state.success ? state.message : state.error}
                    </p>
                  </motion.div>
                )}

                {/* Form */}
                <form action={formAction} className="p-4 space-y-4">
                  <div>
                    <label className="block text-green-400 font-mono text-xs mb-2">
                      --name <span className="text-red-400">*</span>
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:border-green-400 focus:outline-none transition-colors font-mono text-sm placeholder-gray-500"
                      placeholder="Enter your name..."
                      whileFocus={{ scale: 1.01, borderColor: "rgb(34 197 94)" }}
                      disabled={isPending}
                    />
                  </div>

                  <div>
                    <label className="block text-green-400 font-mono text-xs mb-2">
                      --email <span className="text-red-400">*</span>
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:border-green-400 focus:outline-none transition-colors font-mono text-sm placeholder-gray-500"
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.01, borderColor: "rgb(34 197 94)" }}
                      disabled={isPending}
                    />
                  </div>

                  <div>
                    <label className="block text-green-400 font-mono text-xs mb-2">
                      --message <span className="text-red-400">*</span>
                    </label>
                    <motion.textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:border-green-400 focus:outline-none transition-colors resize-none font-mono text-sm placeholder-gray-500"
                      placeholder="Tell me about your project or just say hello!"
                      whileFocus={{ scale: 1.01, borderColor: "rgb(34 197 94)" }}
                      disabled={isPending}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-400 text-black rounded font-mono text-sm font-medium hover:bg-green-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isPending ? 1 : 1.02 }}
                    whileTap={{ scale: isPending ? 1 : 0.98 }}
                  >
                    {isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>EXECUTE SEND</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href="/resume-Mohamed-Datt-Full Stack Developer-2025.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-2 p-3 bg-gray-900/30 border border-gray-600 rounded hover:border-green-400/50 transition-colors text-sm font-mono"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                >
                  <Zap size={16} className="text-green-400" />
                  <span>RESUME</span>
                </motion.a>
                <motion.a
                  href="https://github.com/MeeksonJr"
                  target="_blank"
                  className="flex items-center justify-center gap-2 p-3 bg-gray-900/30 border border-gray-600 rounded hover:border-green-400/50 transition-colors text-sm font-mono"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                >
                  <Github size={16} className="text-green-400" />
                  <span>GITHUB</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

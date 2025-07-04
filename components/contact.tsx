"use client"

import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Terminal, Code, Zap, MessageSquare, Coffee } from "lucide-react"
import { useActionState, useState } from "react"
import { submitContactForm } from "@/app/actions/contact"

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [showCursor, setShowCursor] = useState(true)
  const [activeField, setActiveField] = useState("")

  // Blinking cursor effect
  useState(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  })

  const terminalCommands = [
    "$ whoami",
    "> Mohamed Datt - Full Stack Developer",
    "$ location",
    "> Norfolk, Virginia, USA",
    "$ status",
    "> Available for opportunities & collaborations",
    "$ echo 'Ready to build something amazing together!'",
    "> Ready to build something amazing together!",
  ]

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-green-400/20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative">
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
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-yellow-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
            />
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="text-green-400" size={20} />
              <span className="text-green-400 font-mono text-sm">contact@mohameddatt.com</span>
            </div>
          </div>

          {/* Terminal Command Preview */}
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
                  className={cmd.startsWith("$") ? "text-green-400" : "text-gray-300"}
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

          {/* Main Contact Interface */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Interactive Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Connection Status Card */}
              <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">STATUS: ONLINE & READY</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MessageSquare className="text-green-400" size={20} />
                  Let's Build Something Amazing!
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  From Guinea to Norfolk, I've built a journey in code. Whether you have a project in mind, want to
                  discuss AI and web development, or just connect with a fellow developer - let's chat! 🚀
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-gray-900/30 border border-gray-700 rounded-lg p-4 text-center"
                  whileHover={{ scale: 1.02, borderColor: "rgb(34 197 94 / 0.5)" }}
                >
                  <div className="text-green-400 font-mono text-lg">24h</div>
                  <div className="text-gray-400 text-xs">Response Time</div>
                </motion.div>
                <motion.div
                  className="bg-gray-900/30 border border-gray-700 rounded-lg p-4 text-center"
                  whileHover={{ scale: 1.02, borderColor: "rgb(34 197 94 / 0.5)" }}
                >
                  <div className="text-green-400 font-mono text-lg flex items-center justify-center gap-1">
                    <Coffee size={16} />∞
                  </div>
                  <div className="text-gray-400 text-xs">Coffee Level</div>
                </motion.div>
              </div>

              {/* Quick Action */}
              <motion.a
                href="/resume-Mohamed-Datt-Full Stack Developer-2025.pdf"
                target="_blank"
                className="flex items-center justify-center gap-2 p-4 bg-green-400/10 border border-green-400/30 rounded-lg hover:bg-green-400/20 transition-colors text-sm font-mono group"
                whileHover={{ scale: 1.02 }}
                rel="noreferrer"
              >
                <Zap size={16} className="text-green-400" />
                <span className="text-green-400">DOWNLOAD RESUME</span>
                <motion.div
                  className="ml-auto opacity-0 group-hover:opacity-100"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Right Side - Interactive Message Terminal */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Terminal Window */}
              <div className="bg-black/80 border border-green-400/30 rounded-lg overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-green-400/20">
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
                      <span className="text-xs">{state.success ? "SUCCESS:" : "ERROR:"}</span>
                    </div>
                    <p className="mt-1 text-xs opacity-90">{state.success ? state.message : state.error}</p>
                  </motion.div>
                )}

                {/* Interactive Form */}
                <form action={formAction} className="p-4 space-y-4">
                  <div>
                    <label className="block text-green-400 font-mono text-xs mb-2">
                      --name <span className="text-red-400">*</span>
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:border-green-400 focus:outline-none transition-all font-mono text-sm placeholder-gray-500"
                      placeholder="Enter your name..."
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField("")}
                      whileFocus={{
                        scale: 1.01,
                        borderColor: "rgb(34 197 94)",
                        boxShadow: "0 0 0 1px rgb(34 197 94 / 0.3)",
                      }}
                      disabled={isPending}
                    />
                    {activeField === "name" && (
                      <motion.div
                        className="text-xs text-green-400 mt-1 font-mono"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {">"} What should I call you?
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <label className="block text-green-400 font-mono text-xs mb-2">
                      --email <span className="text-red-400">*</span>
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:border-green-400 focus:outline-none transition-all font-mono text-sm placeholder-gray-500"
                      placeholder="your.email@example.com"
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField("")}
                      whileFocus={{
                        scale: 1.01,
                        borderColor: "rgb(34 197 94)",
                        boxShadow: "0 0 0 1px rgb(34 197 94 / 0.3)",
                      }}
                      disabled={isPending}
                    />
                    {activeField === "email" && (
                      <motion.div
                        className="text-xs text-green-400 mt-1 font-mono"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {">"} How can I reach you back?
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <label className="block text-green-400 font-mono text-xs mb-2">
                      --message <span className="text-red-400">*</span>
                    </label>
                    <motion.textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:border-green-400 focus:outline-none transition-all resize-none font-mono text-sm placeholder-gray-500"
                      placeholder="Tell me about your project or just say hello!"
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField("")}
                      whileFocus={{
                        scale: 1.01,
                        borderColor: "rgb(34 197 94)",
                        boxShadow: "0 0 0 1px rgb(34 197 94 / 0.3)",
                      }}
                      disabled={isPending}
                    />
                    {activeField === "message" && (
                      <motion.div
                        className="text-xs text-green-400 mt-1 font-mono"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {">"} What's on your mind?
                      </motion.div>
                    )}
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

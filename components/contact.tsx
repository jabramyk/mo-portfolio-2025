"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useActionState } from "react"
import { submitContactForm } from "@/app/actions/contact"

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-green-400 text-sm mb-4">$ echo "Let's connect!"</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">Ready to collaborate?</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  I'm always interested in discussing new opportunities, innovative projects, or just connecting with
                  fellow developers. Whether you have a project in mind or want to chat about AI and web development,
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <motion.div
                  className="flex items-center gap-3 text-gray-300 text-sm md:text-base"
                  whileHover={{ x: 5, color: "rgb(74 222 128)" }}
                >
                  <MapPin className="text-green-400 flex-shrink-0" size={20} />
                  <span>Norfolk, Virginia, USA</span>
                </motion.div>

                <motion.a
                  href="mailto:d.mohamed1504@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="text-green-400 flex-shrink-0" size={20} />
                  <span className="break-all">d.mohamed1504@gmail.com</span>
                </motion.a>

                <motion.a
                  href="https://github.com/MeeksonJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base"
                  whileHover={{ x: 5 }}
                >
                  <Github className="text-green-400 flex-shrink-0" size={20} />
                  <span>github.com/MeeksonJr</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/mohamed-datt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin className="text-green-400 flex-shrink-0" size={20} />
                  <span>linkedin.com/in/mohamed-datt</span>
                </motion.a>
              </div>
            </div>

            <motion.div
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Success/Error Messages */}
              {state && (
                <motion.div
                  className={`p-4 rounded-lg border ${
                    state.success
                      ? "bg-green-900/50 border-green-500 text-green-200"
                      : "bg-red-900/50 border-red-500 text-red-200"
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
                    <p className="text-sm">{state.success ? state.message : state.error}</p>
                  </div>
                </motion.div>
              )}

              <form action={formAction} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-green-400">
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900 border border-gray-700 rounded focus:border-green-400 focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                    disabled={isPending}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-green-400">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900 border border-gray-700 rounded focus:border-green-400 focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                    disabled={isPending}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-green-400">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900 border border-gray-700 rounded focus:border-green-400 focus:outline-none transition-colors resize-none text-sm md:text-base"
                    placeholder="Tell me about your project or just say hello!"
                    whileFocus={{ scale: 1.02 }}
                    disabled={isPending}
                  ></motion.textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-green-400 text-black rounded font-medium hover:bg-green-300 transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isPending ? 1 : 1.02 }}
                  whileTap={{ scale: isPending ? 1 : 0.98 }}
                >
                  {isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

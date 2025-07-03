"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-green-400 text-sm">$ exit 0</div>
          <p className="text-gray-400">© 2025 Mohamed Datt. Built with Next.js, TypeScript, and lots of ☕</p>
          <p className="text-gray-500 text-sm">
            "From Guinea to NYC, from cartoons to code - the journey continues..."
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

"use client"

import { motion } from "framer-motion"
import { Eye, EyeOff, X } from "lucide-react"
import { useInspectMode } from "./inspect-mode-context"

export default function InspectToggle() {
  const { isInspectMode, toggleInspectMode } = useInspectMode()

  return (
    <motion.div
      className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="flex items-center gap-2">
        <motion.button
          onClick={toggleInspectMode}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isInspectMode
              ? "bg-green-400 text-black shadow-lg shadow-green-400/25"
              : "bg-gray-800 text-gray-300 border border-gray-600 hover:border-green-400"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isInspectMode ? <Eye size={16} /> : <EyeOff size={16} />}
          <span className="hidden md:inline">{isInspectMode ? "Inspect Mode ON" : "Inspect Mode"}</span>
          <span className="md:hidden">{isInspectMode ? "ON" : "OFF"}</span>
        </motion.button>

        {/* Exit Inspector Mode Button */}
        {isInspectMode && (
          <motion.button
            onClick={toggleInspectMode}
            className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            title="Exit Inspector Mode"
          >
            <X size={14} />
          </motion.button>
        )}
      </div>

      {isInspectMode && (
        <motion.div
          className="absolute top-full left-0 mt-2 p-2 bg-black border border-green-400 rounded text-xs text-green-400 whitespace-nowrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Click any element to learn more! Click X to exit.
        </motion.div>
      )}
    </motion.div>
  )
}

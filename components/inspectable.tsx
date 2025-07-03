"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useInspectMode } from "./inspect-mode-context"

interface InspectableProps {
  children: ReactNode
  elementId: string
  className?: string
}

export default function Inspectable({ children, elementId, className = "" }: InspectableProps) {
  const { isInspectMode, setSelectedElement } = useInspectMode()

  const handleClick = () => {
    if (isInspectMode) {
      setSelectedElement(elementId)
    }
  }

  return (
    <motion.div
      className={`${className} ${
        isInspectMode
          ? "cursor-pointer relative hover:ring-2 hover:ring-green-400 hover:ring-opacity-50 transition-all duration-200"
          : ""
      }`}
      onClick={handleClick}
      whileHover={isInspectMode ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
      {isInspectMode && (
        <motion.div
          className="absolute inset-0 bg-green-400/10 border border-green-400/30 rounded pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  )
}

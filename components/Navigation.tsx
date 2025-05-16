'use client'

import { IconBriefcase, IconHome, IconMail, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home', icon: <IconHome size={20} /> },
  { name: 'About', href: '#about', icon: <IconUser size={20} /> },
  { name: 'Projects', href: '#projects', icon: <IconBriefcase size={20} /> },
  { name: 'Contact', href: '#contact', icon: <IconMail size={20} /> }
]

const Navigation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.nav
      onMouseLeave={() => setHoveredIndex(null)}
      className="fixed bottom-5 left-1/2 z-50 flex items-center gap-6 px-6 py-4 backdrop-blur-md bg-white/20 dark:bg-zinc-900/40 rounded-full border border-zinc-300/40 dark:border-zinc-700/40 shadow-lg -translate-x-1/2"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="relative group focus:outline-none"
          onMouseEnter={() => setHoveredIndex(index)}
          onFocus={() => setHoveredIndex(index)}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="text-zinc-700 dark:text-zinc-200 hover:text-primary transition-colors"
          >
            {item.icon}
          </motion.div>

          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: -10, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded-md shadow-md pointer-events-none select-none"
              >
                {item.name}
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      ))}
    </motion.nav>
  )
}

export default Navigation

'use client';

import { motion } from 'framer-motion';
import { Github, Code2, Sparkles, Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] glass-panel border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <Code2 className="w-8 h-8 text-cyber-blue" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-pink rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Code<span className="text-cyber-blue">Canvas</span>
              </h1>
              <p className="text-xs text-gray-400">3D Portfolio Gallery</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-4"
          >
            <a
              href="#gallery"
              className="px-4 py-2 text-sm text-gray-300 hover:text-cyber-blue transition-colors"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-sm text-gray-300 hover:text-cyber-blue transition-colors"
            >
              About
            </a>
            <a
              href="https://github.com/Hammad338/codecanvas"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </a>
            <button className="cyber-button-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Add Your Project
            </button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-2"
          >
            <a
              href="#gallery"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-cyber-blue transition-colors"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-cyber-blue transition-colors"
            >
              About
            </a>
            <a
              href="https://github.com/yourusername/codecanvas"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-cyber-blue transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

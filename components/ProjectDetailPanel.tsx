'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { Project } from '@/types';
import { CodePreview } from './CodePreview';
import { useEffect } from 'react';

interface ProjectDetailPanelProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailPanel({ project, onClose }: ProjectDetailPanelProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[150]"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full md:w-[600px] lg:w-[800px] bg-cyber-dark border-l border-cyber-blue/30 z-[200] overflow-y-auto shadow-2xl"
          >
            <div className="scan-line h-full">
              {/* Header */}
              <div className="sticky top-0 bg-cyber-dark/95 backdrop-blur-xl border-b border-white/10 p-6 z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 pr-4">
                    <motion.h2
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold text-white mb-2 glow-text"
                      style={{ color: project.color }}
                    >
                      {project.title}
                    </motion.h2>
                    <p className="text-gray-300">{project.description}</p>
                  </div>

                  <button
                    onClick={onClose}
                    className="flex-shrink-0 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all border border-white/20 hover:border-cyber-blue group"
                    aria-label="Close panel"
                  >
                    <X className="w-6 h-6 text-gray-300 group-hover:text-cyber-blue transition-colors" />
                  </button>
                </div>

                {/* Close hint */}
                <p className="text-xs text-gray-500 mb-4">Press ESC or click outside to close</p>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button-primary flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-panel p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-cyber-blue" />
                    <h3 className="text-xl font-semibold text-white">Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:border-cyber-blue/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Code Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-panel p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-cyber-purple" />
                    <h3 className="text-xl font-semibold text-white">Code Showcase</h3>
                  </div>
                  <CodePreview
                    code={project.codeSnippet}
                    language={project.language}
                  />
                </motion.div>

                {/* AI Explanation (Placeholder) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-panel p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-cyber-green" />
                    <h3 className="text-xl font-semibold text-white">AI Insights</h3>
                  </div>
                  <div className="space-y-3 text-gray-300">
                    <p className="text-sm leading-relaxed">
                      This project demonstrates advanced full-stack development skills with modern
                      technologies. The implementation showcases clean architecture, scalable design
                      patterns, and attention to user experience.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400">Complexity:</span>
                      <span className="px-3 py-1 rounded-full bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30">
                        Advanced
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

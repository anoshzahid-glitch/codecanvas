'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProjectDetailPanel } from '@/components/ProjectDetailPanel';
import { sampleProjects } from '@/lib/sampleProjects';
import { Project } from '@/types';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap } from 'lucide-react';

// Dynamically import 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import('@/components/Scene3D').then(mod => ({ default: mod.Scene3D })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center bg-cyber-darker">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 mx-auto mb-6 border-4 border-cyber-blue border-t-transparent rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg font-semibold"
        >
          Loading 3D Galaxy
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-sm mt-2"
        >
          Preparing your project universe...
        </motion.p>
      </div>
    </div>
  ),
});

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-cyber-darker">
      <Header />

      <Hero />

      {/* 3D Gallery Section */}
      <section id="gallery" className="relative min-h-screen">
        {/* Section Header */}
        <div className="absolute top-8 left-0 right-0 z-[80] text-center px-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project <span className="text-cyber-blue glow-text">Galaxy</span>
            </h2>
            <p className="text-gray-300">
              Navigate through space and click on any project to explore the code
            </p>
          </motion.div>
        </div>

        {/* 3D Scene */}
        <div className="relative h-screen">
          <Scene3D
            projects={sampleProjects}
            onProjectClick={setSelectedProject}
            selectedProject={selectedProject}
          />
        </div>

        {/* Controls Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[80] glass-panel px-6 py-4 rounded-xl border border-white/20 pointer-events-none"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🖱️</span>
              <span className="text-gray-400">Drag to <span className="text-cyber-blue font-semibold">rotate</span></span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              <span className="text-gray-400">Scroll to <span className="text-cyber-purple font-semibold">zoom</span></span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">👆</span>
              <span className="text-gray-400">Click to <span className="text-cyber-pink font-semibold">explore</span></span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="text-cyber-blue glow-text">CodeCanvas</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built by developers, for developers. Stand out with a portfolio that actually gets you hired.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: '3D Visualization',
                description: 'Showcase your projects in an immersive 3D space that recruiters will remember',
                color: 'cyber-blue',
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'AI Explanations',
                description: 'Automatically generate plain-English explanations of your most complex code',
                color: 'cyber-purple',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Live Code Execution',
                description: 'Let recruiters interact with your code directly in the browser',
                color: 'cyber-pink',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group"
              >
                <div className={`text-${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Panel */}
      <ProjectDetailPanel
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6 bg-cyber-dark/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 text-lg mb-3">
            Built with <span className="text-cyber-blue">❤️</span> by{' '}
            <a
              href="https://github.com/Hammad338"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-blue hover:text-cyber-purple transition-colors font-semibold"
            >
              Hammad Alam
            </a>
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CodeCanvas. Open source under MIT License.
          </p>
        </div>
      </footer>
    </main>
  );
}

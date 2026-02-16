'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Project } from '@/types';
import * as THREE from 'three';

interface FloatingCardProps {
  project: Project;
  position: [number, number, number];
  onClick: () => void;
  isSelected: boolean;
}

export function FloatingCard({ project, position, onClick, isSelected }: FloatingCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeOffset = useMemo(() => position[0] + position[2], [position]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;

      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + timeOffset) * 0.2;

      // Subtle rotation
      meshRef.current.rotation.y = Math.sin(time * 0.2 + timeOffset) * 0.1;

      // Pulsing scale when selected
      if (isSelected) {
        const scale = 1.05 + Math.sin(time * 2) * 0.03;
        meshRef.current.scale.setScalar(scale);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* Larger clickable box for better interaction */}
      <boxGeometry args={[2.5, 3, 0.5]} />
      <meshStandardMaterial transparent opacity={0} />

      {/* HTML Content */}
      <Html
        transform
        distanceFactor={1.5}
        position={[0, 0, 0.3]}
        occlude={false}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className={`
            glass-panel p-4 w-64 transition-all duration-200 cursor-pointer
            hover:scale-105 active:scale-95
            ${isSelected ? 'neon-border scale-105' : 'border-white/20 hover:border-white/30'}
          `}
          style={{
            pointerEvents: 'auto',
            userSelect: 'none',
            boxShadow: isSelected
              ? `0 0 30px ${project.color}, 0 0 60px ${project.color}40`
              : '0 10px 40px rgba(0,0,0,0.5)'
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-white truncate flex-1">
              {project.title}
            </h3>
            <div
              className="w-3 h-3 rounded-full ml-2 flex-shrink-0 animate-pulse"
              style={{
                backgroundColor: project.color,
                boxShadow: `0 0 10px ${project.color}`
              }}
            />
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 border border-white/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 border border-white/20">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Language Badge */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              <span className="text-gray-400 uppercase tracking-wide">{project.language}</span>
            </div>
          </div>

          {/* Click hint */}
          <div className="mt-3 pt-3 border-t border-white/10 text-center">
            <span className="text-xs text-gray-500">Click to explore</span>
          </div>
        </div>
      </Html>
    </mesh>
  );
}

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Project } from '@/types';
import { FloatingCard } from './FloatingCard';

interface Scene3DProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  selectedProject: Project | null;
}

export function Scene3D({ projects, onProjectClick, selectedProject }: Scene3DProps) {
  return (
    <div className="w-full h-screen relative z-10">
      <Canvas
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />

        {/* Lighting - optimized */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#bd00ff" />

        {/* Background Stars - reduced count for performance */}
        <Stars
          radius={100}
          depth={50}
          count={1500}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Floating Project Cards - optimized layout */}
        {projects.map((project, index) => {
          const angle = (index / projects.length) * Math.PI * 2;
          const radius = 6;
          // Create a more spread out, circular layout
          const position: [number, number, number] = [
            Math.cos(angle) * radius,
            Math.sin(index * 0.8) * 1.5, // Better vertical distribution
            Math.sin(angle) * radius
          ];

          return (
            <FloatingCard
              key={project.id}
              project={project}
              position={position}
              onClick={() => onProjectClick(project)}
              isSelected={selectedProject?.id === project.id}
            />
          );
        })}

        {/* Grid Floor - optimized geometry */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
          <planeGeometry args={[40, 40, 20, 20]} />
          <meshBasicMaterial
            color="#00d9ff"
            opacity={0.08}
            transparent
            wireframe
          />
        </mesh>

        {/* Camera Controls - smoother settings */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxDistance={16}
          minDistance={4}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}

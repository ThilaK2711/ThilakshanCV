'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingShapesProps {
  count?: number;
  colors?: string[];
}

function Shape({ position, speed, color }: { position: [number, number, number]; speed: number; color: string }) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.position.z += Math.sin(Date.now() * 0.0005) * 0.01;
    }
  });

  const randomGeometry = Math.random();

  return (
    <mesh ref={meshRef} position={position} scale={Math.random() * 1.5 + 0.5}>
      {randomGeometry < 0.33 && <octahedronGeometry args={[1, 0]} />}
      {randomGeometry >= 0.33 && randomGeometry < 0.66 && <tetrahedronGeometry args={[1, 0]} />}
      {randomGeometry >= 0.66 && <dodecahedronGeometry args={[1, 0]} />}
      <meshPhongMaterial color={color} wireframe emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
}

function FloatingShapesScene({ count = 15, colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b'] }: FloatingShapesProps) {
  const shapes = Array.from({ length: count }).map((_, i) => ({
    id: i,
    position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10] as [number, number, number],
    speed: Math.random() * 2 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <Canvas camera={{ position: [0, 0, 15] }} style={{ width: '100%', height: '100%', display: 'block' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[20, 20, 20]} intensity={1} />
      <pointLight position={[-20, -20, -20]} intensity={0.5} color="#ec4899" />
      {shapes.map((shape) => (
        <Shape key={shape.id} position={shape.position} speed={shape.speed} color={shape.color} />
      ))}
    </Canvas>
  );
}

export default function FloatingShapes(props: FloatingShapesProps & { height?: string }) {
  const { height = 'h-screen', ...sceneProps } = props;
  
  return (
    <div className={`${height} w-full`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%' }}>
        <FloatingShapesScene {...sceneProps} />
      </div>
    </div>
  );
}

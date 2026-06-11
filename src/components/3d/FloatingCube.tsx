'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingCubeProps {
  scale?: number;
  speed?: number;
  color?: string;
}

function CubeGeometry({ scale = 1, speed = 4, color = '#6366f1' }: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.012 * speed;
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={color} wireframe={false} />
    </mesh>
  );
}

export default function FloatingCube(props: FloatingCubeProps & { height?: string }) {
  const { height = 'h-96', ...cubeProps } = props;
  
  return (
    <div className={`${height} w-full`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 0, 3] }} style={{ width: '100%', height: '100%', display: 'block' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <CubeGeometry {...cubeProps} />
        </Canvas>
      </div>
    </div>
  );
}

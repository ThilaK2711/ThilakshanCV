'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface RotatingTorusProps {
  scale?: number;
  color?: string;
  emissive?: string;
}

function TorusGeometry({ scale = 1, color = '#ec4899', emissive = '#6d28d9' }: RotatingTorusProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005;
      meshRef.current.rotation.x += 0.003;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshPhongMaterial 
        color={color}
        emissive={emissive}
        emissiveIntensity={0.5}
        shininess={100}
      />
    </mesh>
  );
}

export default function RotatingTorus(props: RotatingTorusProps & { height?: string }) {
  const { height = 'h-80', ...torusProps } = props;
  
  return (
    <div className={`${height} w-full`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 0, 2.5] }} style={{ width: '100%', height: '100%', display: 'block' }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-5, -5, 5]} intensity={0.8} color="#ec4899" />
          <TorusGeometry {...torusProps} />
        </Canvas>
      </div>
    </div>
  );
}

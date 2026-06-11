'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleSystemProps {
  count?: number;
  color?: string;
  size?: number;
}

function Particles({ count = 5000, color = '#6366f1', size = 2 }: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 2000;
      arr[i + 1] = (Math.random() - 0.5) * 2000;
      arr[i + 2] = (Math.random() - 0.5) * 2000;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001;
      pointsRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleSystem(props: ParticleSystemProps & { height?: string }) {
  const { height = 'h-96', ...particleProps } = props;
  
  return (
    <div className={`${height} w-full`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 0, 100] }} style={{ width: '100%', height: '100%', display: 'block' }}>
          <Particles {...particleProps} />
        </Canvas>
      </div>
    </div>
  );
}

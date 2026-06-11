'use client';

import { useEffect } from 'react';

interface SplineProps {
  scene: string;
  height?: string;
  className?: string;
}

export default function SplineScene({ scene, height = 'h-96', className = '' }: SplineProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.50/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`w-full ${height} ${className}`}>
      <spline-viewer file-url={scene}></spline-viewer>
    </div>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

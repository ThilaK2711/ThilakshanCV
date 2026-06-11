'use client';

import { Suspense, useState, useEffect } from 'react';

interface ClientOnly3DProps {
  Component: React.ComponentType<any>;
  props: any;
  loadingFallback?: React.ReactNode;
}

export function ClientOnly3D({ Component, props, loadingFallback }: ClientOnly3DProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return loadingFallback || <div style={{ width: '100%', height: '100%', background: 'rgba(99, 102, 241, 0.05)' }} />;
  }

  return (
    <Suspense fallback={loadingFallback || <div style={{ width: '100%', height: '100%', background: 'rgba(99, 102, 241, 0.05)' }} />}>
      <Component {...props} />
    </Suspense>
  );
}

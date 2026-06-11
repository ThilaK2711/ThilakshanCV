'use client';

import { Suspense } from 'react';
import FloatingShapesComponent from './FloatingShapes';

export default function FloatingShapesWrapper(props: any) {
  return (
    <Suspense fallback={<div style={{ width: '100%', height: '100%', background: 'rgba(99, 102, 241, 0.05)' }} />}>
      <FloatingShapesComponent {...props} />
    </Suspense>
  );
}

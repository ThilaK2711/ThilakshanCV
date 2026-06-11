# 3D Animations Setup Guide

Your portfolio now includes advanced 3D animations! Here's what's been added and how to use them.

## 🎨 3D Components

### 1. **FloatingShapes** (Hero Background)
A dynamic background with rotating 3D geometric shapes.
- **Location**: Hero section (background)
- **Features**: Multiple rotating polyhedra, animated particles
- **Customize**: Adjust color palette, count, and rotation speed

```tsx
<FloatingShapes count={12} colors={['#6366f1', '#ec4899', '#10b981', '#f59e0b']} />
```

### 2. **RotatingTorus** (Skills Section)
A spinning torus/donut with glow effect.
- **Location**: Skills section (right sidebar)
- **Features**: Smooth rotation, emissive materials, lighting effects
- **Customize**: Color and emissive intensity

```tsx
<RotatingTorus color="#6366f1" emissive="#6d28d9" scale={1} />
```

### 3. **FloatingCube** (Projects Section)
An animated 3D cube with rotation and floating motion.
- **Location**: Projects section (right sidebar)
- **Features**: Wireframe/solid rendering, vertical float animation
- **Customize**: Color, scale, and rotation speed

```tsx
<FloatingCube color="#ec4899" speed={5} scale={1} />
```

### 4. **ParticleSystem** (About Section Background)
A field of animated particles creating a dynamic background.
- **Location**: About section (background)
- **Features**: Thousands of particles, slow rotation
- **Customize**: Particle count, color, size

```tsx
<ParticleSystem count={2000} color="#6366f1" size={0.5} />
```

### 5. **SplineScene** (For Custom 3D Models)
Embed interactive 3D scenes created in Spline.
- **Usage**: Great for showcasing projects or creating complex scenes
- **Setup**: Create scene on Spline, get URL, embed component

```tsx
<SplineScene scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode" />
```

---

## 🚀 Getting Started with Spline

### Step 1: Create a Spline Account
1. Go to [spline.design](https://spline.design)
2. Sign up for a free account
3. Create a new project

### Step 2: Design Your 3D Scene
1. Use Spline's visual editor to create 3D objects
2. Add animations, interactions, and effects
3. Customize materials, lighting, and camera

### Step 3: Get Your Scene URL
1. Click "Export" → "Web"
2. Copy the `.splinecode` URL
3. Use it in the component:

```tsx
import { SplineScene } from "@/components/3d";

export function MySection() {
  return <SplineScene scene="YOUR_SPLINE_URL_HERE" height="h-96" />;
}
```

---

## 📦 Installation

Dependencies have been added to `package.json`. Install them:

```bash
npm install
# or
yarn install
```

The following packages were added:
- `three` - 3D graphics library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber
- `@react-three/postprocessing` - Post-processing effects

---

## 🎯 Performance Tips

1. **Reduce particle count** on lower-end devices:
   ```tsx
   <ParticleSystem count={1000} /> // Instead of 5000
   ```

2. **Use height constraints** to prevent layout issues:
   ```tsx
   <FloatingCube height="h-80" /> // Fixed height
   ```

3. **Set opacity** if animations feel too intense:
   ```tsx
   <div style={{ opacity: 0.3 }}>
     <FloatingShapes />
   </div>
   ```

4. **Disable on mobile** for better performance:
   ```tsx
   {!isMobile && <FloatingShapes />}
   ```

---

## 🎨 Customization Examples

### Change Colors Across All Animations
Edit each component to use your brand colors:

```tsx
// Hero - Update FloatingShapes colors
<FloatingShapes colors={['#yourColor1', '#yourColor2', '#yourColor3']} />

// Skills - Update RotatingTorus
<RotatingTorus color="#yourColor" />

// Projects - Update FloatingCube
<FloatingCube color="#yourColor" />

// About - Update ParticleSystem
<ParticleSystem color="#yourColor" />
```

### Adjust Animation Speed
```tsx
// FloatingShapes - More shapes = more movement
<FloatingShapes count={20} /> // Faster visual

// FloatingCube - Change speed parameter
<FloatingCube speed={10} /> // Faster rotation (default: 4)

// RotatingTorus - Already optimized, no speed param
```

### Sticky Positioning
The Torus and Cube are sticky positioned. Adjust in the CSS modules:

```css
.torusContainer {
  position: sticky;
  top: 100px; /* Adjust how far from top it stays */
}
```

---

## 🔧 Advanced Customization

### Add More 3D Components
Create new components in `src/components/3d/`:

```tsx
'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function MyGeometry() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial color="#6366f1" />
    </mesh>
  );
}

export default function MySphere() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <MyGeometry />
      </Canvas>
    </div>
  );
}
```

### Combine Multiple Animations
```tsx
<section>
  <div style={{ position: 'relative' }}>
    <FloatingShapes count={8} />
    <ParticleSystem count={1000} style={{ position: 'absolute', top: 0 }} />
  </div>
</section>
```

---

## 🐛 Troubleshooting

### Canvas not rendering?
- Check browser console for errors
- Ensure `'use client'` is at top of component
- Verify Three.js dependencies installed: `npm install three`

### Performance issues?
- Reduce particle count or shape count
- Disable animations on mobile
- Use lower quality geometries (fewer args)
- Check GPU usage in DevTools

### Colors not showing?
- Verify color format (hex: `#6366f1`, rgb: `rgb(99, 102, 241)`)
- Check lighting - ambient light might be too low
- Use `emissive` property for self-illumination

---

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Spline Design](https://spline.design)

---

## ✨ Current Setup

Your portfolio now has:
- ✅ 3D animated hero background (FloatingShapes)
- ✅ Rotating torus in skills section (RotatingTorus)
- ✅ Floating cube in projects section (FloatingCube)
- ✅ Particle background in about section (ParticleSystem)
- ✅ Spline integration ready for custom models

Enjoy your new 3D portfolio!

'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function DumbbellModel() {
  const ref = useRef();
  const { scene } = useGLTF('/models/free_model_dumbbell.glb');

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      // Sine-based rotation for smoother "easy ease" like motion
      ref.current.rotation.y = Math.sin(t * 0.5) * 0.9;
      ref.current.rotation.x = Math.sin(t * 0.3) * 0.9;
    }
  });

  return (
    <primitive ref={ref} object={scene} scale={0.06} position={[0, -1, 0]} />
  );
}

export default function DumbbellScene() {
  return (
    <div className="w-60 h-60 mx-auto">
      <Canvas camera={{ position: [0, 1, 7], fov: 40 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={5} />
        <Suspense fallback={null}>
          <DumbbellModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

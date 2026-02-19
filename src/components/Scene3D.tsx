import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Float, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export function KaabaModel() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Cube */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 2.5, 2]} />
          <meshStandardMaterial color="#111111" roughness={0.1} metalness={0.8} />
        </mesh>
        
        {/* Gold Band */}
        <mesh position={[0, 0.8, 0]} castShadow>
          <boxGeometry args={[2.05, 0.3, 2.05]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
        </mesh>

        {/* Door Detail */}
        <mesh position={[0.6, -0.2, 1.01]}>
          <planeGeometry args={[0.5, 0.8]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
        </mesh>
      </Float>
      
      <ContactShadows 
        position={[0, -1.5, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4.5} 
      />
    </group>
  );
}

export function Scene3D() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <KaabaModel />
      <Environment preset="city" />
    </>
  );
}

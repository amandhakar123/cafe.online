"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CoffeeCupModel() {
  const groupRef = useRef<THREE.Group>(null);
  const liquidRef = useRef<THREE.Mesh>(null);
  const steamRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle continuous rotation & subtle floating motion
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }

    if (steamRef.current) {
      steamRef.current.rotation.y -= delta * 0.2;
      steamRef.current.children.forEach((child) => {
        child.position.y = (child.position.y + delta * 0.4) % 1.2;
        const mesh = child as THREE.Mesh;
        if (mesh.material && typeof mesh.material === "object" && "opacity" in mesh.material) {
          (mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - child.position.y / 1.2) * 0.25;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={1.25}>
      {/* --- CUP BODY --- */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.9, 0.65, 1.1, 32, 1, true]} />
        <meshStandardMaterial
          color="#1C1815"
          roughness={0.25}
          metalness={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Cup Bottom Cap */}
      <mesh position={[0, -0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.65, 32]} />
        <meshStandardMaterial color="#1C1815" roughness={0.25} metalness={0.15} />
      </mesh>

      {/* Cup Gold Rim Accent */}
      <mesh position={[0, 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.035, 16, 64]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.85}
          roughness={0.2}
          emissive="#5C450B"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Cup Handle */}
      <mesh position={[0.85, 0.05, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <torusGeometry args={[0.35, 0.07, 16, 32, Math.PI * 1.2]} />
        <meshStandardMaterial color="#1C1815" roughness={0.25} metalness={0.15} />
      </mesh>

      {/* --- ESPRESSO LIQUID SURFACE --- */}
      <mesh ref={liquidRef} position={[0, 0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.84, 32]} />
        <meshStandardMaterial
          color="#3B2314"
          roughness={0.1}
          metalness={0.4}
        />
      </mesh>

      {/* Crema Art Swirl on Liquid */}
      <mesh position={[0, 0.405, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.15, 0.5, 32]} />
        <meshStandardMaterial
          color="#D8A064"
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* --- SAUCER --- */}
      <mesh position={[0, -0.65, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.1, 0.12, 32]} />
        <meshStandardMaterial color="#171412" roughness={0.25} metalness={0.15} />
      </mesh>

      {/* Saucer Gold Outer Ring */}
      <mesh position={[0, -0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.48, 0.03, 16, 64]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.85}
          roughness={0.2}
          emissive="#5C450B"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* --- STEAM PARTICLES --- */}
      <group ref={steamRef} position={[0, 0.6, 0]}>
        {[0, 0.35, 0.7].map((initY, i) => (
          <mesh key={i} position={[Math.sin(i) * 0.15, initY, Math.cos(i) * 0.15]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.25 + i * 0.1, 0.04, 16, 32]} />
            <meshBasicMaterial
              color="#F7F5F0"
              transparent
              opacity={0.2}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

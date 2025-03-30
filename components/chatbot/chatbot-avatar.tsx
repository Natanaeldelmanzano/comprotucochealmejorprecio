"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import type * as THREE from "three"

function RobotHead() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.05
    }
  })

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Cabeza del robot */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#2563eb"
          metalness={0.8}
          roughness={0.2}
          emissive="#1d4ed8"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Ojos */}
      <mesh position={[-0.25, 0.2, 0.51]} scale={0.08}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.25, 0.2, 0.51]} scale={0.08}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
      </mesh>

      {/* Antena */}
      <mesh position={[0, 0.6, 0]} scale={[0.05, 0.2, 0.05]}>
        <cylinderGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1d4ed8" />
      </mesh>
      <mesh position={[0, 0.7, 0]} scale={0.08}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.5} />
      </mesh>

      {/* Detalles de la cara */}
      <mesh position={[0, -0.15, 0.51]} scale={[0.3, 0.05, 0.05]}>
        <boxGeometry />
        <meshStandardMaterial color="#1d4ed8" />
      </mesh>
    </group>
  )
}

export function ChatbotAvatar() {
  return (
    <div className="w-full h-full rounded-full overflow-hidden bg-blue-600/20">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RobotHead />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}


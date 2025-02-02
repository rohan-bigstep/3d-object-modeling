/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 AsterChair_III.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/AsterChair_III.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.plank1.geometry} material={materials['Material.001']} position={[0.01, 0.067, -0.007]} rotation={[0, 0.004, 0]} />
      <mesh geometry={nodes.plank2.geometry} material={materials.Material} position={[0.013, 0.474, 0.783]} rotation={[1.526, 0, -0.004]} />
      <mesh geometry={nodes.back.geometry} material={materials['Material.001']} position={[0.01, 0.532, -0.007]} rotation={[Math.PI / 2, 0, -1.575]} />
      <mesh geometry={nodes.frame.geometry} material={materials['Material.001']} position={[0.01, 0.968, -0.007]} rotation={[0, 0.004, -Math.PI / 2]} />
      <mesh geometry={nodes.pillow1.geometry} material={materials['Material.001']} position={[0.015, 0.651, 0.248]} rotation={[1.541, 0.001, 0.005]} scale={[0.665, 0.554, 0.546]} />
      <mesh geometry={nodes.pillow2.geometry} material={materials['Material.001']} position={[0.011, 1.13, -0.55]} rotation={[2.676, 0.001, 0.005]} scale={[0.665, 0.554, 0.546]} />
    </group>
  )
}

useGLTF.preload('/AsterChair_III.gltf')

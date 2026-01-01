import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Text, Float } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

// Fallback if maath fails to load types
function Stars(props: any) {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function FloatingSkills() {
    const groupRef = useRef<THREE.Group>(null);
    const skills = useMemo(() => [
        { name: "Python", pos: [-2, 1, -1], color: "#3776AB" },
        { name: "React", pos: [2, 0, -2], color: "#61DAFB" },
        { name: "AWS", pos: [-1.5, -1.5, 0], color: "#FF9900" },
        { name: "Next.js", pos: [1.5, 1.5, -1], color: "#FFFFFF" },
        { name: "Figma", pos: [0, 2, -3], color: "#F24E1E" },
        { name: "Node", pos: [2, -2, -2], color: "#339933" },
        { name: "SQL", pos: [-2.5, 0.5, -2], color: "#00758F" },
        { name: "Java", pos: [0.5, -2.5, -1], color: "#007396" },
    ], []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Slow orbit
            groupRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {skills.map((skill, i) => (
                <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <Text
                        position={skill.pos as [number, number, number]}
                        fontSize={0.3}
                        color={skill.color}
                        anchorX="center"
                        anchorY="middle"
                        fillOpacity={0.7}
                    >
                        {skill.name}
                    </Text>
                </Float>
            ))}
        </group>
    );
}

export default function HeroCanvas() {
    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <Stars />
                <FloatingSkills />
            </Canvas>
        </div>
    );
}

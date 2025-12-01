import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import * as THREE from "three";

const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);
const mix = (from: number, to: number, progress: number) => from + (to - from) * progress;
const progress = (min: number, max: number, value: number) => (value - min) / (max - min);

const color = "#ffffff"; // White

const Icosahedron = () => (
    <mesh rotation-x={0.35}>
        <icosahedronGeometry args={[1.8, 0]} />
        <meshBasicMaterial wireframe color={color} transparent opacity={0.1} />
    </mesh>
);

const Star = ({ p }: { p: number }) => {
    const ref = useRef<THREE.Mesh>(null);

    useLayoutEffect(() => {
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
    }, [p]);

    return (
        <mesh ref={ref}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial wireframe color={color} transparent opacity={0.1} />
        </mesh>
    );
};

function Scene({ numStars = 100 }) {
    const gl = useThree((state) => state.gl);
    const { scrollYProgress } = useScroll();
    const yAngle = useTransform(
        scrollYProgress,
        [0, 1],
        [degreesToRadians(40), degreesToRadians(200)] // Started at 40deg to simulate scroll
    );
    const distance = useTransform(scrollYProgress, [0, 1], [6, 2]); // Started closer (6) to simulate scroll
    const time = useTime();

    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
            distance.get(),
            yAngle.get(),
            time.get() * 0.0005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    // Removed low pixel ratio setting for sharp rendering
    // useLayoutEffect(() => gl.setPixelRatio(0.3), [gl]);

    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star key={i} p={progress(0, numStars, i)} />);
    }

    return (
        <>
            <Icosahedron />
            {stars}
        </>
    );
}

export const ScrollScene = () => {
    return (
        <div className="fixed top-0 right-[calc(10%-60px)] h-full w-full md:w-1/2 -z-10">
            <Canvas gl={{ antialias: true, alpha: true }}>
                <Scene />
            </Canvas>
        </div>
    );
};

import { useEffect } from "react";
import { a, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Camera() {
  const { materials, nodes } = useGLTF("/level-react-draco.glb");
  const [spring, api] = useSpring(
    () => ({ config: { friction: 40 }, "rotation-z": 0 }),
    [],
  );
  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const wander = () => {
      api.start({ "rotation-z": Math.random() });
      timeout = setTimeout(wander, (1 + Math.random() * 2) * 800);
    };
    wander();
    return () => clearTimeout(timeout);
  }, [api]);
  return (
    <a.group
      position={[-0.58, 0.83, -0.03]}
      rotation={[Math.PI / 2, 0, 0.47]}
      {...spring}
    >
      <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
      <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} />
    </a.group>
  );
}

export default function Scene() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial />
        </mesh>
        <Camera />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
      </Canvas>
    </div>
  );
}

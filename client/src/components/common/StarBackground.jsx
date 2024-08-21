import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "lodash";

const StarBackground = (props) => {
  const ref = useRef();
  const sphere = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      const phi = random(0, 2 * Math.PI, true);
      const costheta = random(-1, 1, true);
      const u = random(0, 1, true);
      const theta = Math.acos(costheta);
      const r = 1.2 * Math.cbrt(u);
      positions[i] = r * Math.sin(theta) * Math.cos(phi);
      positions[i + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i + 2] = r * Math.cos(theta);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default StarsCanvas;

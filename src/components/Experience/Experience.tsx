import { Canvas } from "@react-three/fiber"
import Carousel from "./Carousel/Carousel"
import Rig from "./Rig/Rig"
import { ScrollControls } from "@react-three/drei"

const Experience = ():JSX.Element => {
  return (
    <Canvas  camera={{ position: [0, 0, 100], fov: 15 }}>
        <fog attach="fog" args={['#a79', 8.5, 12]} />
        <ScrollControls pages={4} infinite>
        <Rig rotation={[0, 0, 0.15]}>
          <Carousel count={8}/>
        </Rig>
        </ScrollControls>
    </Canvas>
  )
}

export default Experience
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { ReactElement, useRef } from 'react'
import * as THREE from 'three'

interface props {
    children:ReactElement;
    rotation:[number,number,number];
}

const Rig:React.FC<props> = ({children,...prop}) => {
    const ref = useRef<THREE.Group>(null)
    const scroll = useScroll()
    console.log(scroll);
    
    useFrame((state, delta) => {
        
        if(ref.current && state.events.update){
            ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
            state.events.update() // Raycasts every frame rather than on pointer-move
            easing.damp3(state.camera.position, [15 -state.pointer.x *2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
            state.camera.lookAt(0, 0, 0) // Look at center
        }
    })
    return <group ref={ref} {...prop} >
        {children}
    </group>
}

export default Rig
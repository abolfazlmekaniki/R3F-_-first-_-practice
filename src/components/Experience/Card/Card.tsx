import { Image, ImageProps } from "@react-three/drei"
import * as THREE from 'three'
import '../../../util'
import {useRef, useState } from "react"
import { ThreeEvent, useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { expand } from "maath/dist/declarations/src/buffer"

type props =ImageProps &{
  position:[number,number,number],
  rotation:[number,number,number],
  url:string,
}

const Card:React.FC<props> = ({url,...imageProps}):JSX.Element => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false)
  const pointerOver = (e:ThreeEvent<PointerEvent>) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)
  useFrame((state, delta) => {
   if(ref.current){
    easing.damp3(ref.current?.scale, hovered ? 1.15 : 1, 0.1, delta)
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
    easing.damp(ref.current.material, 'zoom', hovered ? 0.97 : 1.3, 0.2, delta)
   }
  })
  return (
    <Image  ref={ref} url={url}  transparent side={THREE.DoubleSide} {...imageProps} onPointerOver={pointerOver} onPointerOut={pointerOut}>
      <bentPlaneGeometry args={[0.1, 1.5, 1.5, 20, 20]}/>
    </Image>
  )
}

export default Card
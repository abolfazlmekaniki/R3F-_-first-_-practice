import { MeshBasicMaterialParameters } from 'three';
import { BentPlaneGeometry, MeshSineMaterial } from './src/util';
import { ReactThreeFiber } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshSineMaterial: ReactThreeFiber.MaterialNode<MeshSineMaterial, MeshBasicMaterialParameters>;
    bentPlaneGeometry: ReactThreeFiber.BufferGeometryNode<BentPlaneGeometry, typeof BentPlaneGeometry>;
  }
}
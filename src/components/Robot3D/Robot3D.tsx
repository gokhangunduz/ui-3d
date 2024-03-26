import { useRef, MutableRefObject, ReactElement, Fragment } from "react";
import useBarcode from "../../hooks/useBarcode";
import { useFrame } from "@react-three/fiber";
import useModel from "../../hooks/useModel";

export default function Robot3D(): ReactElement {
  const meshRef: MutableRefObject<any> = useRef();
  const { robotLocation } = useBarcode();
  const { robotModel } = useModel();

  useFrame(() => {
    if (!meshRef.current || !robotModel) return;
    meshRef.current.updateMatrixWorld();
  });

  if (!robotModel) {
    return <Fragment />;
  }

  return (
    <primitive
      object={robotModel}
      ref={meshRef}
      position={[robotLocation?.y, 0, robotLocation?.x]}
      rotation={[0, robotLocation?.z, 0]}
    />
  );
}

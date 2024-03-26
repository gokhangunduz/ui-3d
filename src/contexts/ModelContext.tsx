import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { createContext, useMemo, useState } from "react";

export const ModelContext: any = createContext<any>(null);

// eslint-disable-next-line
export default ({ children }: any) => {
  const [robotModel, setRobotModel] = useState<GLTFLoader | null>(null);

  useMemo(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/robotModel.glb",
      (gltf: any) => {
        setRobotModel(gltf.scene);
      },
      () => {},
      (error) => {
        console.error("Error loading the 3D model.", error);
      }
    );
  }, []);

  return (
    <ModelContext.Provider
      value={{
        robotModel,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};

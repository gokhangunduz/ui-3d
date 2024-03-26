import ControlBar from "../ControlBar/ControlBar";
import useBarcode from "../../hooks/useBarcode";
import Machine3D from "../Machine3D/Machine3D";
import Scene3D from "../Scene3D/Scene3D";
import Robot3D from "../Robot3D/Robot3D";
import { ReactElement } from "react";
import ConnectionStatus from "../ConnectionStatus/ConnectionStatus";

export default function Page3D(): ReactElement {
  const { barcodeItems } = useBarcode();

  return (
    <div className="relative w-screen h-screen">
      <Scene3D>
        {barcodeItems?.map((barcodeItem: any, barcodeItemIndex: number) => {
          return <Machine3D key={barcodeItemIndex} item={barcodeItem} />;
        })}
        <Robot3D />
      </Scene3D>
      <ControlBar />
      <ConnectionStatus />
    </div>
  );
}

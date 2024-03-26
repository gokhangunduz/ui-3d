import { ReactElement } from "react";
import useBarcode from "../../hooks/useBarcode";
import Machine3D from "../Machine3D/Machine3D";
import Scene3D from "../Scene3D/Scene3D";
import Robot3D from "../Robot3D/Robot3D";

export default function Page3D(): ReactElement {
  const { barcodeItems } = useBarcode();

  return (
    <div className="animate-fadeIn absolute inset-0">
      <Scene3D>
        {barcodeItems?.map((barcodeItem: any, barcodeItemIndex: number) => {
          return <Machine3D key={barcodeItemIndex} item={barcodeItem} />;
        })}
        <Robot3D />
      </Scene3D>
    </div>
  );
}

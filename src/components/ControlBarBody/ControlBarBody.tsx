import { ReactElement } from "react";
import WebsocketInput from "../WebsocketInput/WebsocketInput";
import FindInput from "../FindInput/FindInput";
import Button from "../Button/Button";
import useBarcode from "../../hooks/useBarcode";

export default function ControlBarBody(): ReactElement {
  const { setBarcodeItems } = useBarcode();

  return (
    <div className="flex gap-4 bg-white py-2 px-4 rounded-t border border-gray-200">
      <FindInput />
      <WebsocketInput />
      <Button label="Clear" onClick={() => setBarcodeItems([])} />
    </div>
  );
}

import { ReactElement } from "react";
import WebsocketInput from "../WebsocketInput/WebsocketInput";

export default function ControlBarBody(): ReactElement {
  return (
    <div className="flex gap-4 bg-white py-2 px-4 rounded-t border border-gray-200">
      <WebsocketInput />
    </div>
  );
}

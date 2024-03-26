import { ReactElement } from "react";
import useBarcode from "../../hooks/useBarcode";

export default function ConnectionStatus(): ReactElement {
  const { connectionStatus } = useBarcode();

  return (
    <div className="absolute bottom-2 right-2 flex gap-2 items-center">
      <div
        className={`w-2.5 h-2.5 rounded-full ${
          connectionStatus === null
            ? "bg-yellow-500"
            : connectionStatus
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      />
      <p className="text-sm">
        {connectionStatus === null
          ? "Pending"
          : connectionStatus
          ? "Connected"
          : "Disconnected"}
      </p>
    </div>
  );
}

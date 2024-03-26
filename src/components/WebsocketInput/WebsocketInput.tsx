import { ReactElement, useState } from "react";
import InputText from "../InputText/InputText";
import {
  getWebSocketURL,
  setWebSocketURL,
} from "../../functions/websocket.interface";

export default function WebsocketInput(): ReactElement {
  const [value, setValue] = useState<string>(getWebSocketURL());

  return (
    <InputText
      label="WebSocketURL:"
      value={value}
      onChange={(event) => {
        setWebSocketURL(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
}

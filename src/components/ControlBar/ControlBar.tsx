import ControlBarArrow from "../ControBarArrow/ControBarArrow";
import ControlBarBody from "../ControlBarBody/ControlBarBody";
import { ReactElement, useState } from "react";

export default function ControlBar(): ReactElement {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="absolute bottom-0 left-1/2 right-1/2 flex flex-col items-center">
      <ControlBarArrow
        isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
      />
      {isOpened && <ControlBarBody />}
    </div>
  );
}

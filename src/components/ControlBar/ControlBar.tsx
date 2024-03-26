import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import WebsocketInput from "../WebsocketInput/WebsocketInput";
import { ReactElement, useState } from "react";

export default function ControlBar(): ReactElement {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="absolute bottom-0 left-1/2 right-1/2 flex flex-col items-center">
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="flex items-center justify-center bg-slate-50 py-0.5 px-2 rounded-t cursor-pointer border border-slate-300"
      >
        {isOpened ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </button>
      {isOpened && (
        <div className="flex gap-4 bg-slate-50 py-2 px-4 rounded-t border border-slate-300">
          <WebsocketInput />
        </div>
      )}
    </div>
  );
}

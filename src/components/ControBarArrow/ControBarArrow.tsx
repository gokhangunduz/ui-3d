import { ReactElement } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface IControlBarArrow {
  isOpened: boolean;
  onClick: () => void;
}

export default function ControlBarArrow({
  isOpened,
  onClick,
}: IControlBarArrow): ReactElement {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center border border-gray-200 bg-white py-0.5 px-2 rounded-t cursor-pointer"
    >
      {isOpened ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
    </button>
  );
}

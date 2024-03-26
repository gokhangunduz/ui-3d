import { ReactElement } from "react";

interface IButton {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: IButton): ReactElement {
  return (
    <button
      className="border border-slate-300 bg-slate-100 px-4 py-1 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

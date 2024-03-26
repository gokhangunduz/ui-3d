import { ChangeEvent, ReactElement } from "react";

interface IInputText {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({
  label,
  value,
  onChange,
}: IInputText): ReactElement {
  return (
    <label className="flex items-center gap-2">
      <p>{label}</p>
      <input
        className="border border-slate-300 rounded h-8 p-1"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

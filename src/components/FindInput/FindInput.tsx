import { ReactElement } from "react";
import InputText from "../InputText/InputText";
import useBarcode from "../../hooks/useBarcode";

export default function FindInput(): ReactElement {
  const { findBarcodeInput, setFindBarcodeInput } = useBarcode();

  return (
    <InputText
      label="Find:"
      value={findBarcodeInput}
      onChange={(event) => {
        setFindBarcodeInput(event.target.value);
      }}
    />
  );
}

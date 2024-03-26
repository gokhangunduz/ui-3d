import Page3D from "./components/Page3D/Page3D";
import BarcodeContext from "./contexts/BarcodeContext";
import ModelContext from "./contexts/ModelContext";

export default function App() {
  return (
    <BarcodeContext>
      <ModelContext>
        <Page3D />
      </ModelContext>
    </BarcodeContext>
  );
}

import ReactDOM from "react-dom/client";
import App from "./App";
import BarcodeContext from "./contexts/BarcodeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BarcodeContext>
    <App />
  </BarcodeContext>
);

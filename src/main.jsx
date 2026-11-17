import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import InitializationGate from "./components/InitializationGate.jsx";
// import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>
    {/* <ToastContainer /> */}
    <InitializationGate>
    <App />
  </InitializationGate>
  </React.StrictMode>);

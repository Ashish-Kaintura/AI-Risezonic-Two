// File: src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FormProvider } from "./context/FormContext";
import {FormModalProvider} from "./context/FormModalContext"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormModalProvider>
      <FormProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </FormProvider>
    </FormModalProvider>
  </React.StrictMode>
);

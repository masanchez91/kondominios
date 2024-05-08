import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AxiosInterceptor } from "./interceptors/axios.interceptor.ts";

AxiosInterceptor();

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("No se encontró el elemento con id 'root'");
}

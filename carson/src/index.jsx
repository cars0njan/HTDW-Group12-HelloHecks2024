import React from "react";
import ReactDOMClient from "react-dom/client";
import { Carson } from "./screens/Carson";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Carson />);

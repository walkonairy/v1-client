import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./AppRouter";

import reportWebVitals from "./reportWebVitals";
import AppRouter from "./AppRouter";
import studentSlice from "./redux/slices/studentSlice";
import { App } from "@asow/core/pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App Component={AppRouter} extraReducer={{ student: studentSlice }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

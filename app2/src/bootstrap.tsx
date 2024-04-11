import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import Router from "shell/shellRoute";
const root = ReactDOM.createRoot(document.getElementById("root")!);

// const Router = React.lazy(() => import("shell/shellRoute"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      {/* <Suspense fallback="Loading...">
        <Router />
      </Suspense> */}

      <App environment="development" />
    </BrowserRouter>
  </React.StrictMode>
);

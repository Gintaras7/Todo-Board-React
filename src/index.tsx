import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TasksBoard from "./pages/TasksBoard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <TasksBoard />
  </React.StrictMode>
);

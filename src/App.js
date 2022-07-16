import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Router testing</h1>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

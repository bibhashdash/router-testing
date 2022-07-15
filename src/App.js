import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Router testing</h1>

      <nav>
        <ul>
          <Link to="/about">
            <li className="pill">About</li>
          </Link>
          <Link to="/activities">
            <li className="pill">Activities</li>
          </Link>
          <Link to="/posts">
            <li className="pill">Posts</li>
          </Link>
          <Link to="/contact">
            <li className="pill">Contact</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";

const Activities = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
};

export default Activities;

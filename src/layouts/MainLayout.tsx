import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../processes/Navbar/ui/Navbar";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

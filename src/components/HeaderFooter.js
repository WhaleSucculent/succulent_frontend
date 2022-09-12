import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Nav";
function HeaderFooter() {
  return (
    <div>
      <Header />
      <Outlet />

    </div>
  );
}

export default HeaderFooter;

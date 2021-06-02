import React from "react";
import Navlinks from "./Navlinks";
import NavRoutes from "./NavRoutes";

function Navbar() {
  return (
    <React.Fragment>
      <div style={{ background: "red ", display: "flex" }}>
        <Navlinks />
        <NavRoutes />
      </div>
    </React.Fragment>
  );
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";


function Links() {
  return (
    <div>
      <NavLink to="/" >
        Home
      </NavLink>
      <NavLink to="/about" >
        About
      </NavLink>
    </div>
  );
}

export default Links;

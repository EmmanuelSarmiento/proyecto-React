import React from "react";
import { NavLink } from "react-router-dom";

const Logo = function Logo(props) {
  return (
    <NavLink className="navbar-brand">
      <img
        src={process.env.PUBLIC_URL + "logo_el_bodeguero.png"}
        alt="Logo"
        width={75}
        height={75}
        className="d-inline-block align-text-top"
      />
    </NavLink>
  );
};

export default Logo;

import React from "react";

const Logo = function Logo(props) {
  return (
    <span className="navbar-brand">
      <img
        src={process.env.PUBLIC_URL + "logo_el_bodeguero.png"}
        alt="Logo"
        width={75}
        height={75}
        class="d-inline-block align-text-top"
      />
    </span>
  );
};

export default Logo;

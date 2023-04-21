import React from "react";
import ListNavBarOptionComponent from "./ListOptionNavBarComponent";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBarComponent = (props) => {
  const nameOptions = [
    "Electrónica",
    "Joyeria",
    "Ropa de Hombre",
    "Ropa de Mujer",
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Logo></Logo>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ListNavBarOptionComponent
            nameOption={nameOptions}
          ></ListNavBarOptionComponent>
        </div>
        <CartWidget></CartWidget>
      </div>
    </nav>
  );
};

export default NavBarComponent;

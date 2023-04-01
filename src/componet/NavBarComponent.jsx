import React from "react";
import ListNavBarOptionComponent from "./ListOptionNavBarComponent";

const NavBarComponent = (props) => {
  const nameOptions = ["Cervezas", "Aguas"];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            src="https://pulsocervecero.com/wp-content/uploads/2020/04/CB_RGB-1200x1200-1-1024x1024.png"
            alt="Logo"
            width={100}
            height={100}
            class="d-inline-block align-text-top"
          />
        </span>
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
        <span className="navbar-brand">
          <img
            src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png"
            alt="Cart"
            width={25}
            height={25}
            class="d-inline-block align-text-top"
          />{" "}
          5
        </span>
      </div>
    </nav>
  );
};

export default NavBarComponent;

import React from "react";

const CartWidget = function CartWidget(props) {
  return (
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
  );
};

export default CartWidget;

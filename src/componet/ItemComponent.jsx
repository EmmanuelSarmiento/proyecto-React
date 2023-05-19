import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemComponent = ({ data, handlerUpdate }) => {
  const { id, image, title, description, price, stock } = data;
  const [_stock, _setStock] = useState(stock || 100);
  const handlerActionAdd = () => {
    if (_stock > 0) {
      _setStock(_stock - 1);
      handlerUpdate();
    } else {
      alert("Stock agotado");
    }
  };

  return (
    <div className="card-group mt-4">
      <div className="card text-center">
        <img src={image} className="img-fluid mx-auto" alt={title} />
        <div className="card-body">
          <p>{title}</p>
          <p>{description}</p>
          <p>$ {price}</p>
          <p>{_stock}</p>
        </div>
        <NavLink to={`/products/detail/${id}`}>
          <div className="card-footer text-center">
            <button onClick={handlerActionAdd}>Detalle</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ItemComponent;

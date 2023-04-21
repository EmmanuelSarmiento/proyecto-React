import React, { useState } from "react";

const ItemComponent = ({ data, handlerUpdate }) => {
  const { image, title, description, price, stock } = data;
  const [_stock, _setStock] = useState(stock || 10);
  const handlerActionAdd = () => {
    if (_stock > 0) {
      _setStock(_stock - 1);
      handlerUpdate();
    } else {
      alert("Stock agotado");
    }
  };
  return (
    <div className="card-group row row-cols-1 row-cols-md-2 mt-4">
      <div className="card text-center">
        <img src={image} className="img-fluid mx-auto" alt={title} />
        <div className="card-body">
          <p>{title}</p>
          <p>{description}</p>
          <p>$ {price}</p>
          <p>{_stock}</p>
        </div>
        <div className="card-footer text-center">
          <button onClick={handlerActionAdd}>Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;

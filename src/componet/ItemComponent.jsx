import React, { useState } from "react";

const ItemComponent = (props) => {
  const { title, price, handlerUpdate } = props;
  const [stock, setStock] = useState(10);
  const handlerActionAdd = () => {
    if (stock > 0) {
      setStock(stock - 1);
      handlerUpdate();
    } else {
      alert("Stock agotado");
    }
  };
  return (
    <div>
      <p>{title}</p>
      <p>$ {price}</p>
      <p>{stock}</p>
      <button onClick={handlerActionAdd}>Agregar</button>
    </div>
  );
};

export default ItemComponent;

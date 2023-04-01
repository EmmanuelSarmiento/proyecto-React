import React, { Fragment, useState } from "react";

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
    <Fragment>
      <p>{title}</p>
      <p>$ {price}</p>
      <p>{stock}</p>
      <button onClick={handlerActionAdd}>Agregar</button>
    </Fragment>
  );
};

export default ItemComponent;

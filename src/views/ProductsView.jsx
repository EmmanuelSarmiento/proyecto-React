import React, { useState } from "react";
import ItemListComponent from "../componet/ItemListComponent";
import ItemComponent from "../componet/ItemComponent";
import useFetch from "../utils/useFetch";
const URL = "https://fakestoreapi.com/products";

function ProductsView(props) {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(URL);
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="container">
        {loading ? (
          <ItemListComponent></ItemListComponent>
        ) : (
          data.map((item, index) => {
            return (
              <ItemComponent
                key={index}
                data={item}
                handlerUpdate={updateCount}
              />
            );
          })
        )}
        <h2>Total: {count}</h2>
      </div>
    </div>
  );
}

export default ProductsView;

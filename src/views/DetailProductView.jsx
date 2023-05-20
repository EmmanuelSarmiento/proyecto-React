import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailProductView = () => {
  const [product, setProduct] = useState(null);
  const { idProduct } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${idProduct}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(
          "Hubo un error al obtener los detalles del producto",
          error
        );
      }
    };

    fetchProduct();
  }, [idProduct]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  const { title, image, description, price, category } = product;

  return (
    <div>
      <div className="row my-5">
        <div className="col-4 mx-auto">
          <h3>
            Categoría: <span className="text-info">{category}</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-md-3">
          <div className="card mb-3 shadow-sm  py-2 px-5">
            <div className="row ">
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start"
                  alt={title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    <small className="text-muted">$ {price}</small>
                  </p>
                  <button className="btn btn-outline-danger btn-sm">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductView;

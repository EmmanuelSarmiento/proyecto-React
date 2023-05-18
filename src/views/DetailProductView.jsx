import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import GeneralContext from "../context/GeneralContext";

const URL = "https://fakestoreapi.com/products";

const DetailProductView = () => {
  const { idProduct } = useParams();
  const { updateCounter } = useContext(GeneralContext);
  const [data] = useFetch(`${URL}/${idProduct}`);
  const { title, image, description, price, category } = data;
  const addBtnAction = () => {
    updateCounter();
  };
  return (
    <div>
      <div className="row my-5">
        <div className="col-4">
          <h3>
            Categoria: <span className="text-info">{category}</span>
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
                  <button
                    onClick={addBtnAction}
                    className="btn btn-outline-danger btn-sm"
                  >
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

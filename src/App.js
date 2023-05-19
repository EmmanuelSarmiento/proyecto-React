import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsView from "./views/ProductsView";
import NavBarComponent from "./componet/NavBarComponent";
import DetailProductView from "./views/DetailProductView";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route
          path="/products/detail/:idProduct"
          element={<DetailProductView />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

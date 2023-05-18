import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsView from "./views/ProductsView";
import NavBarComponent from "./componet/NavBarComponent";
import DetailProductView from "./views/DetailProductView";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path={routes.root} element={<ProductsView />} />
        <Route
          path={routes.detailProductView}
          element={<DetailProductView />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

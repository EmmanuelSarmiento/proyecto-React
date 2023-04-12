import "./App.css";
import { useState } from "react";
import ItemListComponent from "./componet/ItemListComponent";
import ItemComponent from "./componet/ItemComponent";
import NavBarComponent from "./componet/NavBarComponent";

function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <NavBarComponent />
      <ItemListComponent></ItemListComponent>
      <h2>Total: {count}</h2>
      <ItemComponent title="Cervezas" price={300} handlerUpdate={updateCount} />
      <ItemComponent title="Aguas" price={200} handlerUpdate={updateCount} />
    </div>
  );
}

export default App;

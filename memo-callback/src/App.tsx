import { useState } from "react";
import "./App.css";
import Profile from "./Profile";
import ProductList from "./ProductList";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <Profile firstname="Kenny" lastname="Viver" />
      <ProductList />
    </>
  );
}

export default App;

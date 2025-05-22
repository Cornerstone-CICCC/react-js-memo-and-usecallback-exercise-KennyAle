import { useCallback, useState } from "react";
import GetProductsButton from "./GetProductsButton";

const ProductList = () => {
  const [products, setProducts] = useState();

  const fetchProducts = useCallback(async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data);
  }, []);

  return (
    <div>
      <GetProductsButton fetchProducts={fetchProducts} />
    </div>
  );
};

export default ProductList;

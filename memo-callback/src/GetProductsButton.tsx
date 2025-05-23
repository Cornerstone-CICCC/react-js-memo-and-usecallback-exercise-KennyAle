import { memo } from "react";

type Props = {
  fetchProducts: () => void;
};

const GetProductsButton = memo(({ fetchProducts }: Props) => {
  console.log("Render Button Component");

  return <button onClick={fetchProducts}>Fetch Products</button>;
});

export default GetProductsButton;

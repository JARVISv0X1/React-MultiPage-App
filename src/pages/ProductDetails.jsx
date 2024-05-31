import { useParams } from "react-router-dom";
import { productsList } from "../dish";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(
      productsList.filter((item) => {
        return item.id === params.id;
      })
    );
  }, [product]);

  return (
    <>
      {product.map((data) => {
        return (
          <>
            <h2>Product Details</h2>
            <h2>Id: {data.id}</h2>
            <h1>Dish Name: {data.title}</h1>
            <p>Description: {data.description}</p>
          </>
        );
      })}
    </>
  );
}

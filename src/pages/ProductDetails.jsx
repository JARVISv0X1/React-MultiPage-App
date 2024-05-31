import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h2>Product Details</h2>
      <p>{params.productId}</p>
    </>
  );
}

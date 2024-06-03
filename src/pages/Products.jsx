import { Link } from "react-router-dom";
import { productsList } from "../dish";
export default function Product() {
  const dishList = productsList;
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {dishList.map((itemList) => {
          return (
            <li key={itemList.id}>
              <Link to={`/products/${itemList.id}`}>{itemList.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

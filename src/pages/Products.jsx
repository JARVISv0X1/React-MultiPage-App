import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        <li>
          <Link to={"/products/Product1"}>product1</Link>
        </li>
        <li>
          <Link to={"/products/Product2"}>product2</Link>
        </li>
        <li>
          <Link to={"/products/Product3"}>product3</Link>
        </li>
        <li>
          <Link to={"/products/Product4"}>product4</Link>
        </li>
        <li>
          <Link to={"/products/Product5"}>product5</Link>
        </li>
        <li>
          <Link to={"/products/Product6"}>product6</Link>
        </li>
        <li>
          <Link to={"/products/Product7"}>product7</Link>
        </li>
        <li>
          <Link to={"/products/Product8"}>product8</Link>
        </li>
        <li>
          <Link to={"/products/Product"}>product9</Link>
        </li>
        <li>
          <Link to={"/products/Product10"}>product10</Link>
        </li>
        <li>
          <Link to={"/products/Product11"}>product11</Link>
        </li>
      </ul>
    </>
  );
}

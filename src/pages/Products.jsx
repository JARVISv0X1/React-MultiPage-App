import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
      <h1>Product Page</h1>
      <p>
        go to <Link to={"/"}>home Page</Link>
      </p>
    </>
  );
}

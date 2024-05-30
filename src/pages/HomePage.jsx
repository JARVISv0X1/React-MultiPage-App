import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        go to <Link to={"/products"}>Product Page</Link>
      </p>
    </>
  );
}

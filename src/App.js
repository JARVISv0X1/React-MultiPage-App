import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Products";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "products", element: <Product /> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

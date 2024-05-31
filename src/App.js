import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Products";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <RootLayout></RootLayout>,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <Product /> },
        { path: "/products/:productId", element: <ProductDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

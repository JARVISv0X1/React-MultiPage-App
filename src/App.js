import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Products";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      // AbsolutePath
      path: "/root",
      errorElement: <ErrorPage></ErrorPage>,
      element: <RootLayout></RootLayout>,
      children: [
        // RelativePaths
        { path: "/root", element: <HomePage /> },
        { path: "/root/products", element: <Product /> },
        { path: "/root/products/:id", element: <ProductDetails /> },
      ],
    },
    //
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <RootLayout></RootLayout>,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/root/products", element: <Product /> },
        { path: "/root/products/:id", element: <ProductDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

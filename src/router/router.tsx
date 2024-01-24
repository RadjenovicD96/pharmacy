import { createBrowserRouter } from "react-router-dom";
import DefaultRoute from "./DefaultRoute";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Layout from "../Layout/Layout";
import EditProduct from "../pages/EditProduct/EditProduct";
import CreateProduct from "../pages/CreateProduct/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <DefaultRoute />,
    children: [
      {
        index: true,
        element: <DefaultRoute />,
      },
      {
        path: "/products",
        element: (
          <Layout>
            <Products />
          </Layout>
        ),
      },
      {
        path: "/products/:id/edit",
        element: (
          <Layout>
            <EditProduct />
          </Layout>
        ),
      },
      {
        path: "/products/create",
        element: (
          <Layout>
            <CreateProduct />
          </Layout>
        ),
      },
      {
        path: "/about",
        element: (
          <Layout>
            <About />
          </Layout>
        ),
      },
    ],
  },
]);

export default router;

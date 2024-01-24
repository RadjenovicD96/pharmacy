import { createBrowserRouter } from "react-router-dom";
import DefaultRoute from "./DefaultRoute";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Layout from "../Layout/Layout";

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

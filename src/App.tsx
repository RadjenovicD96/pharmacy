import { RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./theme/GlobalStyle";
import router from "./router/router";
import { ProductsProvider } from "./context/productsContext";

function App() {
  return (
    <ProductsProvider>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ProductsProvider>
  );
}

export default App;

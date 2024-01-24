import { RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./theme/GlobalStyle";
import router from "./router/router";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { ProductsProvider } from "./context/productsContext";

function App() {
  return (
    <ProductsProvider>
      <RouterProvider router={router} />
      <GlobalStyle />
      <ReactNotifications />
    </ProductsProvider>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./theme/GlobalStyle";
import router from "./router/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;

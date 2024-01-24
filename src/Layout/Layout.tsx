import Sidebar from "../components/Sidebar/Sidebar";
import { Container, MainContent } from "./Layout.styled";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Home />
      </MainContent>
    </Container>
  );
};

export default Layout;

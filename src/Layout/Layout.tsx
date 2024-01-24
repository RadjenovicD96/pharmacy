import Sidebar from "../components/Sidebar/Sidebar";
import { Container, MainContent } from "./Layout.styled";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </Container>
  );
};

export default Layout;

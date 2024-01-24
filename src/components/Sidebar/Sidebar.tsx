import { Container } from "./Sidebar.styled";
import MenuItem from "../MenuItem/MenuItem";

const Sidebar = () => {
  return (
    <Container>
      <MenuItem>Products</MenuItem>
      <MenuItem>About</MenuItem>
    </Container>
  );
};

export default Sidebar;

import { Container } from "./Sidebar.styled";
import MenuItem from "../MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleOnProductsClick = () => {
    navigate("/products");
  };

  const handleOnAboutClick = () => {
    navigate("/about");
  };

  const handleOnStatsClick = () => {
    navigate("/stats");
  };

  return (
    <Container>
      <MenuItem onClick={handleOnProductsClick}>Products</MenuItem>
      <MenuItem onClick={handleOnAboutClick}>About</MenuItem>
      <MenuItem onClick={handleOnStatsClick}>Statistics</MenuItem>
    </Container>
  );
};

export default Sidebar;

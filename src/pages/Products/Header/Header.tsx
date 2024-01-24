import { useNavigate } from "react-router-dom";
import { Container } from "./Header.styled";
import Button from "../../../components/Button/Button";

const Header = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/products/create");
  };

  return (
    <Container>
      <h2>Products</h2>
      <Button onClick={handleOnClick}>+ New Product</Button>
    </Container>
  );
};

export default Header;

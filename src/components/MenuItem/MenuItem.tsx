import React from "react";
import { Container } from "./MenuItem.styled";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<Props> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default MenuItem;

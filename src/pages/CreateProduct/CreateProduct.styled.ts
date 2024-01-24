import styled from "styled-components";
import BaseButton from "../../components/Button/Button";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const Button = styled(BaseButton)`
  width: 360px;
`;

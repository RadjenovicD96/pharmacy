import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 64px;
  border-radius: 16px;
  border: 1px solid white;
  text-align: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

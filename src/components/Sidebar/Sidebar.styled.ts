import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e233a;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  min-width: 240px;
  gap: 16px;
  height: calc(100vh - 64px);

  :hover {
    background-color: #323956;
  }

  :active {
    background-color: #4d5577;
  }
`;

import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export const Body = styled.div`
  padding: 2px 16px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 256px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const MainRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonImage = styled.img`
  width: 24px;
  cursor: pointer;
`;

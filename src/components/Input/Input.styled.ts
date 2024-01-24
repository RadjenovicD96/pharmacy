import styled from "styled-components";

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 360px;
  user-select: none;
`;

export const Label = styled.span`
  gap: 10px;
  align-items: center;
  height: 18px;
  margin: 0 0 12px 12px;
  line-height: 18px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid gray;
  border-radius: 12px;
  transition: all 0.1s ease-in-out;
`;

export const InputElement = styled.input`
  width: 100%;
  border: none;
  height: 32px;
`;

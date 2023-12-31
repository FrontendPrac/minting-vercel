import { styled } from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 8px;
  border-radius: 6px;
  border: 0px;
  color: white;
  background-color: darkturquoise;
  cursor: pointer;
  &:active {
    background-color: deepskyblue;
  }
`;

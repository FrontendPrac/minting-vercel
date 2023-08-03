import { styled } from "styled-components";

export const Wrapper = styled.div``;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  position: fixed;
  display: grid;
  gap: 16px;
  top: 50%;
  left: 50%;
  padding: 16px;
  min-width: 200px;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Message = styled.p``;

export const ConfirmBtn = styled.div`
  flex: 1;
  height: 24px;
  text-align: center;
  color: white;
  background-color: royalblue;
  border-radius: 4px;
  cursor: pointer;
`;

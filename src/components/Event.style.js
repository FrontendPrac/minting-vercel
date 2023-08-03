import { styled } from "styled-components";

export const Cotanier = styled.div`
  position: relative;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  margin-top: 150px;
  /* margin-bottom: 150px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Announcement = styled.div``;

export const LeftText = styled.span`
  font-size: 18px;
  font-weight: lighter;
  color: #ffba00;
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  font-family: sans-serif;
  color: #fff;
  /* var(--bc) */
  text-align: center;
  line-height: 60px;
`;

export const Content = styled.div`
  font-size: 18px;
  color: var(--bc);
`;

export const Button = styled.div`
  cursor: pointer;
  border: 3px solid var(--mc1);
  border-radius: 6px;
  color: var(--hc);
  line-height: 50px;
  padding: 0 34px;
  text-align: center;
  white-space: nowrap;
  outline: none;
  background-color: transparent;
  outline-color: transparent;
`;

export const ImgBox = styled.div`
  width: 80%;
`;

export const Img = styled.div`
  display: flex;
`;

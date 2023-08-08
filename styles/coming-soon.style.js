import { styled } from "styled-components";

export const CountdownBox = styled.div`
  margin-bottom: 17px;
  /* background-color: yellow; */
`;

export const Ul = styled.ul`
  margin: 0;
  list-style-type: none;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  align-items: center;
  justify-content: center;
`;

export const Li = styled.li`
  margin: 0 0 20px 0px;
  padding-left: 20px;
  @media (max-width: 768px) {
    width: 25%;
  }
`;

export const Item = styled.div`
  width: 140px;
  /* background-color: green; */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Count = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 100px;
    height: 17vw;
  }
`;

export const Head3 = styled.h3`
  background: linear-gradient(to right, \\var(--mc1), var(--mc2));
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
  color: #160f1a;
  filter: drop-shadow(0 5px 20px rgba(204, 0, 255, 0.15));
  font-size: 60px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

export const Span = styled.span`
  display: block;
  text-align: center;
  line-height: 50px;
  color: #ddd;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  /* margin-top: 180px; */
`;

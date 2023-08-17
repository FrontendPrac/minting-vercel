import React from "react";
import * as S from "../../../styles/coming-soon.style";

const KSTTimeout = ({
  korDays,
  korHours,
  korMinutes,
  korSeconds,
  marginTop,
}) => {
  return (
    <div>
      <br />
      <S.CountdownBox>
        <S.Ul>
          <S.Li>
            <S.Item>
              <S.Count>
                <S.Head3>{korDays}</S.Head3>
              </S.Count>
              <S.Span>Days</S.Span>
            </S.Item>
          </S.Li>
          <S.Li>
            <S.Item>
              <S.Count>
                <S.Head3>{korHours}</S.Head3>
              </S.Count>
              <S.Span>Hours</S.Span>
            </S.Item>
          </S.Li>
          <S.Li>
            <S.Item>
              <S.Count>
                <S.Head3>{korMinutes}</S.Head3>
              </S.Count>
              <S.Span>MINUTES</S.Span>
            </S.Item>
          </S.Li>
          <S.Li>
            <S.Item>
              <S.Count>
                <S.Head3>{korSeconds}</S.Head3>
              </S.Count>
              <S.Span>SECONDS</S.Span>
            </S.Item>
          </S.Li>
        </S.Ul>
      </S.CountdownBox>
    </div>
  );
};

export default KSTTimeout;

import React from "react";
import * as S from "../../../styles/coming-soon.style";

const UTCTimeout = ({ utcDays, utcHours, utcMinutes, utcSeconds }) => {
  return (
    <>
      <h3 className="fn__maintitle" data-text="UTC" data-align="center">
        UTC
      </h3>
      <br />
      <S.CountdownBox>
        <S.Ul>
          <S.Li>
            <S.Item>
              <S.Count>
                <S.Head3>{utcDays}</S.Head3>
              </S.Count>
              <S.Span>Days</S.Span>
            </S.Item>
          </S.Li>
          <S.Li>
            <S.Item>
              <S.Count>
                <S.Head3>{utcHours}</S.Head3>
              </S.Count>
              <S.Span>Hours</S.Span>
            </S.Item>
          </S.Li>
          <S.Li>
            <S.Item>
              <S.Count>
                <S.Head3>{utcMinutes}</S.Head3>
              </S.Count>
              <S.Span>MINUTES</S.Span>
            </S.Item>
          </S.Li>
          <S.Li>
            <S.Item>
              <S.Count>
                <S.Head3>{utcSeconds}</S.Head3>
              </S.Count>
              <S.Span>SECONDS</S.Span>
            </S.Item>
          </S.Li>
        </S.Ul>
      </S.CountdownBox>
    </>
  );
};

export default UTCTimeout;

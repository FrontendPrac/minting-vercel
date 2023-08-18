import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = ({ isLoading, setIsLoading }) => {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "30px",
        }}
      >
        <div
          style={{
            flexBasis: "50%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>

        <div
          style={{
            margin: "auto",
            flexBasis: "50%",
          }}
        >
          트랜잭션을 실행중입니다.
          <br />
          15 ~ 20초 정도의 시간이 걸립니다.
        </div>
      </div>
      <button onClick={() => setIsLoading(!isLoading)}>버튼</button>
    </>
  );
};

export default Loading;

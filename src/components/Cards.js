import { transform } from "framer-motion";
import Image from "next/image";
import React from "react";

const Cards = ({ onClickEnterAndSpin }) => {
  return (
    <setcion id="event-card">
      <div
        style={{
          width: "65%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          gap: "5px",
        }}
      >
        <div
          id="wrap"
          onClick={onClickEnterAndSpin}
          style={{
            border: "1px solid orange",
            backgroundColor: "black",
            width: "20%",
            height: "15rem",
            padding: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="box-item"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              transition: "all .5s",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="box-item-front" style={{ zIndex: "10" }}>
              <span className="box-text">click</span>
              <Image src="/img/event/key_ai.svg" width="100%" height="100%" />
            </div>
            <div
              className="box-item-back"
              style={{ zIndex: "5", transform: "rotateY(180deg)" }}
            >
              <span className="box-text">Back</span>
              <Image src="/img/event/question.png" width="100%" height="100%" />
            </div>
          </div>
        </div>

        <div
          id="wrap"
          onClick={onClickEnterAndSpin}
          style={{
            border: "1px solid orange",
            backgroundColor: "black",
            width: "20%",
            height: "15rem",
            padding: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="box-item"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              transition: "all .5s",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="box-item-front" style={{ zIndex: "10" }}>
              <span className="box-text">click</span>
              <Image src="/img/event/key_ai.svg" width="100%" height="100%" />
            </div>
            <div
              className="box-item-back"
              style={{ zIndex: "5", transform: "rotateY(180deg)" }}
            >
              <span className="box-text">Back</span>
              <Image src="/img/event/question.png" width="100%" height="100%" />
            </div>
          </div>
        </div>

        <div
          id="wrap"
          onClick={onClickEnterAndSpin}
          style={{
            border: "1px solid orange",
            backgroundColor: "black",
            width: "20%",
            height: "15rem",
            padding: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="box-item"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              transition: "all .5s",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="box-item-front" style={{ zIndex: "10" }}>
              <span className="box-text">click</span>
              <Image src="/img/event/key_ai.svg" width="100%" height="100%" />
            </div>
            <div
              className="box-item-back"
              style={{ zIndex: "5", transform: "rotateY(180deg)" }}
            >
              <span className="box-text">Back</span>
              <Image src="/img/event/question.png" width="100%" height="100%" />
            </div>
          </div>
        </div>

        <div
          id="wrap"
          onClick={onClickEnterAndSpin}
          style={{
            border: "1px solid orange",
            backgroundColor: "black",
            width: "20%",
            height: "15rem",
            padding: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="box-item"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              transition: "all .5s",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="box-item-front" style={{ zIndex: "10" }}>
              <span className="box-text">click</span>
              <Image src="/img/event/key_ai.svg" width="100%" height="100%" />
            </div>
            <div
              className="box-item-back"
              style={{ zIndex: "5", transform: "rotateY(180deg)" }}
            >
              <span className="box-text">Back</span>
              <Image src="/img/event/question.png" width="100%" height="100%" />
            </div>
          </div>
        </div>

        <div
          id="wrap"
          onClick={onClickEnterAndSpin}
          style={{
            border: "1px solid orange",
            backgroundColor: "black",
            width: "20%",
            height: "15rem",
            padding: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="box-item"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              transition: "all .5s",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="box-item-front" style={{ zIndex: "10" }}>
              <span className="box-text">click</span>
              <Image src="/img/event/key_ai.svg" width="100%" height="100%" />
            </div>
            <div
              className="box-item-back"
              style={{ zIndex: "5", transform: "rotateY(180deg)" }}
            >
              <span className="box-text">Back</span>
              <Image src="/img/event/question.png" width="100%" height="100%" />
            </div>
          </div>
        </div>

        {/* <div
          className="box-item"
          style={{
            backgroundColor: "black",
            width: "20%",
            height: "15rem",
            padding: "1rem",
            borderRadius: "0.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <span className="box-text">click</span>
          <Image src="/img/event/key_ai.svg" width="100%" height="100%" />
        </div>

        <div
          className="box-item"
          style={{
            backgroundColor: "black",
            width: "20%",
            height: "15rem",
            padding: "1rem",
            borderRadius: "0.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <span className="box-text">click</span>
          <Image src="/img/event/key_ai.svg" width="100%" height="100%" />
        </div>

        <div
          className="box-item"
          style={{
            backgroundColor: "black",
            width: "20%",
            height: "15rem",
            padding: "1rem",
            borderRadius: "0.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <span className="box-text">click</span>
          <Image src="/img/event/key_ai.svg" width="100%" height="100%" />
        </div>

        <div
          className="box-item"
          style={{
            backgroundColor: "black",
            width: "20%",
            height: "15rem",
            padding: "1rem",
            borderRadius: "0.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <span className="box-text">click</span>
          <Image src="/img/event/key_ai.svg" width="100%" height="100%" />
        </div> */}
      </div>
    </setcion>
  );
};

export default Cards;

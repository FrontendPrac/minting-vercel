import React from "react";
import { useAlert } from "react-alert";

const Textmoving = () => {
  const alert = useAlert();

  return (
    <>
      <div>Textmoving</div>
      <button
        onClick={() => {
          alert.show("알림");
        }}
      >
        버튼
      </button>
      <button
        onClick={() => {
          alert.error("알림");
        }}
      >
        버튼
      </button>
      <button
        onClick={() => {
          alert.success("알림");
        }}
      >
        버튼
      </button>
    </>
  );
};

export default Textmoving;

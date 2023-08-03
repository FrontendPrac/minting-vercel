import React, { useState } from "react";

const EventPicker = ({ open, result, setResult }) => {
  const rewards = [
    "확정화리",
    "경쟁화리",
    "확정화리",
    "경쟁화리",
    "확정화리",
    "경쟁화리",
  ];

  const pickReward = () => {
    const randomIndex = Math.floor(Math.random() * rewards.length);
    const selectedReward = rewards[randomIndex];

    //! 랜덤 화이트 리스트를 주는 로직
    setResult(selectedReward);
    open();
  };

  return (
    <div>
      <button onClick={pickReward}>뽑기</button>
      {result && <p>당첨 결과 : {result}</p>}
    </div>
  );
};

export default EventPicker;

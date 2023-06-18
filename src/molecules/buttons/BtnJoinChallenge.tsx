import React, { ReactElement } from "react";

const BtnJoinChallenge = (): ReactElement => {
  const joinChallenge = (): void => {
    console.log("챌린지 참가하기 이벤트");
  };

  return (
    <button className="btn-join-challenge" onClick={joinChallenge}>
      참가하기
    </button>
  );
};

export default BtnJoinChallenge;

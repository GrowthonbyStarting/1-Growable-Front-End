import React, { ReactElement } from "react";

const BtnChallengeDetail = (): ReactElement => {
  const joinChallenge = (): void => {
    console.log("챌린지 참가하기 이벤트");
  };

  return (
    <button className="btn-join-challenge" onClick={joinChallenge}>
      더 알아보기
    </button>
  );
};

export default BtnChallengeDetail;

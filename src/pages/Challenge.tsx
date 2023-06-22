import React, { ReactElement } from "react";
import ChallengeList from "../components/ChallengeList";
import BtnChallengeCategory from "../molecules/buttons/BtnChallengeCategory";

const Challenge = (): ReactElement => {
  return (
    <div className="challenge">
      <div className="challenge__options">
        <div className="challenge__title">
          <span>Challenge</span>
          <span>마음에 드는 멘토님에게 연락해 팀을 이뤄보세요!</span>
        </div>
        <div className="challenge__category">
          <BtnChallengeCategory title="전체" />
          <BtnChallengeCategory title="IT" />
          <BtnChallengeCategory title="디자인" />
        </div>
      </div>
      <div className="challenge__lists">
        <ChallengeList />
        <ChallengeList />
        <ChallengeList />
        <ChallengeList />
        <ChallengeList />
        <ChallengeList />
        <ChallengeList />
        <ChallengeList />
        <ChallengeList />
      </div>
    </div>
  );
};

export default Challenge;

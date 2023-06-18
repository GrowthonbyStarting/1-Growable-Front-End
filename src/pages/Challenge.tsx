import React, { ReactElement } from "react";
import ChallengeList from "../components/ChallengeList";

const Challenge = (): ReactElement => {
  return (
    <div className="challenge">
      <div className="challenge__content">
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

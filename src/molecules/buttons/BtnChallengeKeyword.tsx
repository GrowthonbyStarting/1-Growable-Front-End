import React, { ReactElement } from "react";

interface Props {
  keyword: string;
}

const BtnChallengeKeyword = ({ keyword }: Props): ReactElement => {
  return (
    <div className="btn-challenge-keyword">
      <span>{keyword}</span>
    </div>
  );
};

export default BtnChallengeKeyword;

import React, { ReactElement } from "react";

interface Props {
  title: string;
}

const BtnChallengeCategory = ({ title }: Props): ReactElement => {
  return <button className="btn-challenge-category">{title}</button>;
};

export default BtnChallengeCategory;

import React, { ReactElement } from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

const ChallengeProgress = ({ icon: Icon, title, description }: Props): ReactElement => {
  return (
    <div className="about-benefits">
      <Icon size={50} />
      <span>{title}</span>
      <div className="about-benefits__description">
        {description.split("\\n").map((line, idx) => {
          return <span key={idx}>{line}</span>;
        })}
      </div>
    </div>
  );
};

export default ChallengeProgress;

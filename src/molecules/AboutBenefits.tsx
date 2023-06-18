import React, { ReactElement } from "react";

interface Props {
  description: string;
}

const AboutBenefits = ({ description }: Props): ReactElement => {
  return (
    <div className="about-benefits">
      <span className="about-benefits__description">{description}</span>
    </div>
  );
};

export default AboutBenefits;

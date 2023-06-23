import React, { ReactElement } from "react";

interface Props {
  title: string;
  height: number;
  children: ReactElement;
}

const DefaultInfoForm = ({ title, height, children }: Props): ReactElement => {
  return (
    <div className="default-info-form common-form " style={{ height }}>
      <div className="default-info-form__header">
        <span>{title}</span>
      </div>
      <div className="default-info-form__body">{children}</div>
    </div>
  );
};

export default DefaultInfoForm;

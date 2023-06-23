import React, { ReactElement } from "react";

interface Props {
  title: string;
  height: string | number;
  children: ReactElement;
  padding?: number;
}

const DefaultInfoForm = ({ title, height, children, padding = 65 }: Props): ReactElement => {
  return (
    <div className="default-info-form common-form " style={{ height, padding }}>
      <div className="default-info-form__header">
        <span>{title}</span>
      </div>
      <div className="default-info-form__body">{children}</div>
    </div>
  );
};

export default DefaultInfoForm;

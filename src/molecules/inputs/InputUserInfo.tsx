import React, { ReactElement } from "react";

interface Props {
  placeholder: string;
  width: number;
  title?: string;
}

const InputUserInfo = ({ placeholder, width, title }: Props): ReactElement => {
  return (
    <div className="input-user-info">
      {title && (
        <div className="input-user-info__title">
          <span>{title}</span> <span>*</span>
        </div>
      )}
      <input className="common-input" style={{ width }} placeholder={placeholder} />
    </div>
  );
};

export default InputUserInfo;

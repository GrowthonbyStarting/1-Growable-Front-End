import React, { ReactElement } from "react";
import { StyleProps } from "../../types/interfaces/Style";

interface Props {
  placeholder: string;
  styleProps?: StyleProps;
  title?: string;
}

const InputUserInfo = ({ placeholder, styleProps, title }: Props): ReactElement => {
  return (
    <div className="input-user-info">
      {title && (
        <div className="input-user-info__title">
          <span>{title}</span> <span>*</span>
        </div>
      )}
      <input className="common-input" style={styleProps} placeholder={placeholder} />
    </div>
  );
};

export default InputUserInfo;

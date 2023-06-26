import React, { ChangeEventHandler, ReactElement } from "react";
import { StyleProps } from "../../types/interfaces/Style";

interface Props {
  placeholder: string;
  styleProps?: StyleProps;
  title?: string;
  onChange?: ChangeEventHandler | undefined;
}

const InputUserInfo = ({ placeholder, styleProps, title, onChange }: Props): ReactElement => {
  return (
    <div className="input-user-info">
      {title && (
        <div className="input-user-info__title">
          <span>{title}</span> <span>*</span>
        </div>
      )}
      <input className="common-input" style={styleProps} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputUserInfo;

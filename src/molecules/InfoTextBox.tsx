import React, { ReactElement } from "react";
import { StyleProps } from "../types/interfaces/Style";

interface Props {
  content: string;
  styleProps?: StyleProps;
  title?: string;
}

const InfoTextBox = ({ content, styleProps, title }: Props): ReactElement => {
  return (
    <div className="input-user-info">
      {title && (
        <div className="input-user-info__title">
          <span>{title}</span> <span>*</span>
        </div>
      )}
      <div className="common-input into-textbox" style={styleProps}>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default InfoTextBox;

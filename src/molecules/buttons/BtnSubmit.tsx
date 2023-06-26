import React, { ReactElement } from "react";
import { StyleProps } from "../../types/interfaces/Style";

interface Props {
  title: string;
  styleProps?: StyleProps;
  onClick?: () => void;
}

const BtnSubmit = ({ title, styleProps, onClick }: Props): ReactElement => {
  return (
    <button className="btn-submit" style={styleProps} onClick={onClick}>
      {title}
    </button>
  );
};

export default BtnSubmit;

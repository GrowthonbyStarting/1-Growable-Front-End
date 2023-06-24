import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
  isColumn: boolean;
  width?: string | number;
  height?: string | number;
  paddingTop?: string | number;
}

const Container = ({ children, isColumn, width, height, paddingTop }: Props): ReactElement => {
  return (
    <div className={`container ${isColumn ? "container--column" : "container--row"}`} style={{ width, height, paddingTop }}>
      {children}
    </div>
  );
};

export default Container;

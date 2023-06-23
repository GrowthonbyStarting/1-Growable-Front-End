import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
  isColumn: boolean;
  height: string | number;
}

const Container = ({ children, isColumn, height }: Props): ReactElement => {
  return (
    <div className={`container ${isColumn ? "container--column" : "container--row"}`} style={{ height }}>
      {children}
    </div>
  );
};

export default Container;

import React from "react";

interface Props {
  title: string;
  color?: string;
}

const BtnModify = ({ title, color }: Props) => {
  return (
    <button className="btn-modify" style={{ color }}>
      {title}
    </button>
  );
};

export default BtnModify;

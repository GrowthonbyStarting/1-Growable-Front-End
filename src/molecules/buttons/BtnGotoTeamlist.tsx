import React, { ReactElement } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BtnGotoTeamlist = (): ReactElement => {
  const navigate: NavigateFunction = useNavigate();

  const gotoTeamList = (): void => {
    navigate("/challenge");
  };

  return (
    <button className="btn-goto-teamlist" onClick={gotoTeamList}>
      팀 리스트 보러가기 <FaArrowRight />
    </button>
  );
};

export default BtnGotoTeamlist;

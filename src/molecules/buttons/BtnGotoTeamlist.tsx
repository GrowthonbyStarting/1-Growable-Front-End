import React, { ReactElement } from "react";
import { FaArrowRight } from "react-icons/fa";

const BtnGotoTeamlist = (): ReactElement => {
  return (
    <button className="btn-goto-teamlist" onClick={() => {}}>
      팀 리스트 보러가기 <FaArrowRight />
    </button>
  );
};

export default BtnGotoTeamlist;

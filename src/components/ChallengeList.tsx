import React, { ReactElement } from "react";
import BtnChallengeKeyword from "../molecules/buttons/BtnChallengeKeyword";
import BtnChallengeHeartIcon from "../molecules/buttons/BtnChallengeHeartIcon";
import { FaRegCommentAlt } from "react-icons/fa";
import BtnSubmit from "../molecules/buttons/BtnSubmit";
import { useNavigateByAuth } from "../hooks/useNavigateByAuth";

const ChallengeList = (): ReactElement => {
  const navigateByAuth = useNavigateByAuth("/challenge-detail");

  const navigateToDetail = (): void => {
    navigateByAuth();
  };

  return (
    <div className="challenge-list">
      <div className="challenge-list__mentor-info">
        <div className="challenge-list__heart-icon-box">
          <BtnChallengeHeartIcon />
        </div>
        <div className="challenge-list__message-icon-box">
          <FaRegCommentAlt color="rgb(81, 132, 236)" />
        </div>
        <div className="challenge-list__picture"></div>
        <span className="challenge-list__mentor-name-text">멘토 이름</span>
        <div className="challenge-list__major">
          <span className="challenge-list__major-text">전문분야</span>
          <span className="challenge-list__major-text">전문분야</span>
        </div>
      </div>
      <hr className="challenge-list__hr" />
      <div className="challenge-list__footer">
        <span className="challenge-list__keyword-text">키워드</span>
        <div className="challenge-list__keyword-box">
          <BtnChallengeKeyword keyword="#키워드" />
          <BtnChallengeKeyword keyword="#키워드" />
          <BtnChallengeKeyword keyword="#키워드" />
        </div>
        <BtnSubmit title="자세히 보기" onClick={navigateToDetail} styleProps={{ width: "100%", height: 40, backgroundColor: "black", color: "white" }} />
      </div>
    </div>
  );
};

export default ChallengeList;

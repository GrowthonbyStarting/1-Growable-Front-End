import React, { ReactElement } from "react";
import BtnChallengeKeyword from "../molecules/buttons/BtnChallengeKeyword";
import BtnChallengeHeartIcon from "../molecules/buttons/BtnChallengeHeartIcon";
import { FaRegCommentAlt } from "react-icons/fa";
import BtnSubmit from "../molecules/buttons/BtnSubmit";
import { useNavigateByAuth } from "../hooks/useNavigateByAuth";
import { Lecture } from "../types/interfaces/Model";

interface Props {
  lecture: Lecture;
}

const ChallengeList = ({ lecture }: Props): ReactElement => {
  const navigateByAuth = useNavigateByAuth("/challenge-detail", lecture);

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
        <span className="challenge-list__mentor-name-text">{lecture.mentorName}</span>
        <div className="challenge-list__major">
          <span className="challenge-list__major-text">{lecture.mentor.category}</span>
          <span className="challenge-list__major-text">{lecture.mentor.subcategory}</span>
        </div>
        <div>쿠팡</div>
        <div className="challenge-list__tag-box">
          <div className="challenge-list__tag">#취업률95%</div>
          <div className="challenge-list__tag">#후기36건</div>
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

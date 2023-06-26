import React, { ReactElement } from "react";
import BtnChallengeKeyword from "../molecules/buttons/BtnChallengeKeyword";
import BtnSubmit from "../molecules/buttons/BtnSubmit";
import { FaHeart } from "react-icons/fa";
import BtnChallengeHeartIcon from "../molecules/buttons/BtnChallengeHeartIcon";

const ChallengeDetail = (): ReactElement => {
  return (
    <div className="challenge-detail common-background">
      <div className="challenge-detail__container common-form">
        <div className="challenge-detail__header">
          <span>Profile</span>
        </div>
        <div className="challenge-detail__body">
          <div className="challenge-detail__left">
            <div className="challenge-detail__mentor-info">
              <div className="challenge-detail__mentor-picture" />
              <div className="challenge-detail__mentor-keyword">
                <BtnChallengeKeyword keyword="#키워드" />
                <BtnChallengeKeyword keyword="#키워드" />
                <BtnChallengeKeyword keyword="#키워드" />
              </div>
            </div>
          </div>
          <div className="challenge-detail__right">
            <div className="challenge-detail__name">
              <span>이건환</span>
            </div>
            <div className="challenge-detail__desc">
              <span># IT계의 1타 강사</span>
              <span># 독설가</span>
              <span># 취업률 95%</span>
              <span># 핵심만 빠르게</span>
            </div>
            <div className="challenge-detail__work">
              <span>&#40;현&#41; 현사이어티 디지털부 팀장</span>
              <span>&#40;전&#41; 고잇 프로덕트 오너</span>
            </div>
            <div className="challenge-detail__lecture">
              <span>2021년 'IT로 취업하기' 부트캠프 강사</span>
              <span>2020년 '쉽게 배우는 코딩 지식' 강의</span>
              <span>2019년 'IT'생태계 강의</span>
            </div>
            <div className="challenge-detail__options">
              <div className="challenge-detail__options-left">
                <BtnChallengeHeartIcon />
                <span>91</span>
              </div>
              <div className="challenge-detail__options-right">
                <span>받은후기</span>
                <span>36개</span>
              </div>
            </div>
            <div className="challenge-detail__btnbox">
              <BtnSubmit title="문의하기" styleProps={{ width: 250, height: 35, backgroundColor: "rgb(252, 252, 252)", border: "1px solid black" }} />
              <BtnSubmit title="참여하기" styleProps={{ width: 250, height: 35, backgroundColor: "black", color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetail;

import React, { ReactElement } from "react";
import BtnGotoTeamlist from "../molecules/buttons/BtnGotoTeamlist";
import ChallengeProgress from "../molecules/ChallengeProgress";
import { FaUsers, FaRegHandshake, FaCheck, FaMedal, FaUserTie } from "react-icons/fa";

const About = (): ReactElement => {
  return (
    <div className="about">
      <div className="about__top">
        <div className="about__mask">
          <div className="about__top-content">
            <div className="about__desc">
              <span>팀으로 함께 성장하는</span>
              <span>스타팅 취업 챌린지</span>
            </div>
            <div className="about__teamlist">
              <span>챌린지 성공시, 리워드 지급!</span>
              <BtnGotoTeamlist />
            </div>
          </div>
        </div>
      </div>
      <div className="about__bottom">
        <div className="about__bottom-content">
          <span>챌린지는 이렇게 진행돼요</span>
          <div className="about__challenge-progress">
            <ChallengeProgress icon={FaUsers} title="팀 매치" description="멘토가 올려놓은 공고 리스트를 통해\n자신이 희망하는 멘토에게\n연락해보세요!" />
            <ChallengeProgress icon={FaRegHandshake} title="멘토 선택" description="잘 맞을 것 같은 멘토님과\n연락을 해봐요" />
            <ChallengeProgress icon={FaCheck} title="챌린지 확정" description="멘토님이 챌린지 확정을 하면\n알림 시스템을 통해\n확정 알림이 발송돼요" />
            <ChallengeProgress icon={FaUserTie} title="멘토와 소통" description="멘토가 지정한 외부 플랫폼을\n통해 소통해요" />
            <ChallengeProgress icon={FaMedal} title="챌린지 완료!" description="챌린지를 성공적으로 완수하면\n리워드를 받을 수 있어요!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

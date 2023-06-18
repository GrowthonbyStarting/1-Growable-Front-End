import React, { ReactElement } from "react";
import AboutBenefits from "../molecules/AboutBenefits";
import BtnGotoTeamlist from "../molecules/buttons/BtnGotoTeamlist";

const About = (): ReactElement => {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__desc">
          <span className="about__desc-text">챌린지를 통해 팀을 꾸려</span>
          <span className="about__desc-text">취업에 성공하세요!</span>
        </div>
        <div className="about__teamlist">
          <span className="about__teamlist-text">챌린지 성공시, 리워드 지급!</span>
          <BtnGotoTeamlist />
        </div>
        <div className="about__benefits">
          <AboutBenefits description="멘토가 올려놓은 공고 리스트를 통해 자신이 희망하는 멘토에게 컨택(선착순)" />
          <AboutBenefits description="챌린지 확정을 하면 메일 혹은 스타팅 내 알림 시스템을 통해 확정 알림 발송" />
          <AboutBenefits description="챌린지 기간동안 멘토가 지정한 외부 플랫폼을 통해 소통" />
          <AboutBenefits description="챌린지 완료 후, 적절한 리워드 지급" />
        </div>
      </div>
    </div>
  );
};

export default About;

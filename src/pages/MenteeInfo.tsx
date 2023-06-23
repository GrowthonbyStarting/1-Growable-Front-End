import React, { ReactElement } from "react";
import DefaultInfoForm from "../components/DefaultInfoForm";
import InputUserInfo from "../molecules/inputs/InputUserInfo";
import Container from "../layouts/Container";

const MenteeInfo = (): ReactElement => {
  return (
    <div className="mentee-info common-background">
      <Container height={800} isColumn>
        <>
          <DefaultInfoForm title="기본 정보" height={450}>
            <div className="mentee-info__basic-info">
              <div className="mentee-info__left">
                <div className="mentee-info__left-content">
                  <div className="mentee-info__picture"></div>
                  <span>Kimkim</span>
                </div>
              </div>
              <div className="mentee-info__right">
                <InputUserInfo placeholder="aaaa@kakao.com" title="이메일" width={550} />
                <InputUserInfo placeholder="OOO" title="이름" width={550} />
                <InputUserInfo placeholder="000-0000-0000" title="전화번호" width={550} />
              </div>
            </div>
          </DefaultInfoForm>
          <DefaultInfoForm title="스타팅 이력서 링크" height={230}>
            <div className="mentee-info__resume">
              <InputUserInfo placeholder="관련 링크를 입력해주세요" width={850} />
            </div>
          </DefaultInfoForm>
        </>
      </Container>
    </div>
  );
};

export default MenteeInfo;

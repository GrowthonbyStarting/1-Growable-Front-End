import React, { ReactElement } from "react";
import DefaultInfoForm from "../components/DefaultInfoForm";
import InputUserInfo from "../molecules/inputs/InputUserInfo";
import Container from "../layouts/Container";
import BtnSubmit from "../molecules/buttons/BtnSubmit";

const MenteeInfo = (): ReactElement => {
  return (
    <div className="mentee-info common-background">
      <Container height={1350} isColumn paddingTop={100}>
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
                <InputUserInfo placeholder="aaaa@kakao.com" title="이메일" styleProps={{ width: 550 }} />
                <InputUserInfo placeholder="OOO" title="이름" styleProps={{ width: 550 }} />
                <InputUserInfo placeholder="000-0000-0000" title="전화번호" styleProps={{ width: 550 }} />
              </div>
            </div>
          </DefaultInfoForm>
          <DefaultInfoForm title="스타팅 이력서 링크" height={230}>
            <div className="mentee-info__resume">
              <InputUserInfo placeholder="관련 링크를 입력해주세요" styleProps={{ width: 850 }} />
            </div>
          </DefaultInfoForm>
          <DefaultInfoForm title="스타팅 이력서 링크" height={400}>
            <div className="mentee-info__point">
              <div className="mentee-info__point-content">
                <span>현재 포인트</span>
                <div className="mentee-info__point-content-upper">
                  <span>50,000</span>
                  <span>point</span>
                </div>
              </div>
              <div className="mentee-info__point-content">
                <span>현재 포인트</span>
                <div className="mentee-info__point-content-lower">
                  <span>신한은행 011-123-456789</span>
                </div>
              </div>
              <BtnSubmit title="인출하기" styleProps={{ width: 75, height: 35, backgroundColor: "rgb(16, 16, 22)", color: "white" }} />
            </div>
          </DefaultInfoForm>
          <BtnSubmit title="수정하기" styleProps={{ width: "100%", height: 60, backgroundColor: "rgb(18, 132, 246)", color: "white" }} />
        </>
      </Container>
    </div>
  );
};

export default MenteeInfo;

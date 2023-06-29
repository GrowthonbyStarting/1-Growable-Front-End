import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultInfoForm from "../components/DefaultInfoForm";
import InputUserInfo from "../molecules/inputs/InputUserInfo";
import Container from "../layouts/Container";
import BtnSubmit from "../molecules/buttons/BtnSubmit";
import { useInput } from "../hooks/useInput";
import { Mentee, User } from "../types/interfaces/Model";
import { RootState } from "../stores/RootReducer";
import { BecomeMenteeRequest } from "../types/interfaces/Request";
import { Identity } from "../types/enums";
import { fetchBecomeMentee } from "../apis/UserApi";
import { usePreventUrlAccess } from "../hooks/usePreventUrlAccess";
import InfoTextBox from "../molecules/InfoTextBox";

const MenteeInfo = (): ReactElement => {
  const user: User = useSelector((state: RootState) => state.user.user);
  const mentee: Mentee | undefined = useSelector((state: RootState) => state.user.user.mentee);
  const dispatch = useDispatch();
  console.log(mentee);

  const [email, setEmail, resetEmail] = useInput(mentee ? mentee.email : "");
  const [name, setName, resetName] = useInput(mentee ? mentee.name : "");
  const [tel, setTel, resetTel] = useInput(mentee ? mentee.phoneNumber : "");
  const [startingUrl, setStartingUrl, resetStartingUrl] = useInput(mentee ? mentee.startingUrl : "");
  const [accountNumber, setAccountNumber, resetAccountNumber] = useInput(mentee ? mentee.accountNumber : "");
  const [menteeInfo, setMenteeInfo] = useState<Mentee | undefined>(mentee);
  const [modifyModeToggle, setModifyModeToggle] = useState<boolean>(true);

  usePreventUrlAccess();

  useEffect(() => {
    mentee && setModifyModeToggle(false);
  }, []);

  const onSave = (): void => {
    if (email === "" || name === "" || tel === "" || startingUrl === "") {
      return;
    }

    const becomeMenteeRequest: BecomeMenteeRequest = {
      email,
      identity: Identity.MENTEE,
      imageUrl: user.kakaoProfileImg,
      menteeId: 0,
      name,
      phoneNumber: tel,
      point: 0,
      startingUrl,
    };

    dispatch(fetchBecomeMentee({ userId: user.userCode, becomeMenteeRequest }) as any).then((response: any) => {
      setMenteeInfo(response.payload);
      setModifyModeToggle(false);
    });
  };

  const onModify = (): void => {
    setModifyModeToggle(true);
  };

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
                {modifyModeToggle ? (
                  <>
                    <InputUserInfo placeholder="aaaa@kakao.com" value={email} title="이메일" styleProps={{ width: 550 }} onChange={setEmail} />
                    <InputUserInfo placeholder="OOO" title="이름" value={name} styleProps={{ width: 550 }} onChange={setName} />
                    <InputUserInfo placeholder="000-0000-0000" value={tel} title="전화번호" styleProps={{ width: 550 }} onChange={setTel} />
                  </>
                ) : (
                  <>
                    <InfoTextBox content={menteeInfo!.email} styleProps={{ width: 550 }} title="이메일" />
                    <InfoTextBox content={menteeInfo!.name} styleProps={{ width: 550 }} title="이름" />
                    <InfoTextBox content={menteeInfo!.phoneNumber} styleProps={{ width: 550 }} title="전화번호" />
                  </>
                )}
              </div>
            </div>
          </DefaultInfoForm>
          <DefaultInfoForm title="스타팅 이력서 링크" height={230}>
            <div className="mentee-info__resume">
              {modifyModeToggle ? (
                <InputUserInfo placeholder="관련 링크를 입력해주세요" value={startingUrl} styleProps={{ width: 850 }} onChange={setStartingUrl} />
              ) : (
                <InfoTextBox content={menteeInfo!.startingUrl} styleProps={{ width: 550 }} />
              )}
            </div>
          </DefaultInfoForm>
          <DefaultInfoForm title="포인트 관리" height={400}>
            <div className="mentee-info__point">
              <div className="mentee-info__point-content">
                <span>현재 포인트</span>
                <div className="mentee-info__point-content-upper">
                  <span>{mentee?.point && "0"}</span>
                  <span>point</span>
                </div>
              </div>
              <div className="mentee-info__point-content">
                <span>계좌</span>
                <div className="mentee-info__point-content-lower">
                  {modifyModeToggle ? <InputUserInfo placeholder="계좌번호를 입력해 주세요" value={accountNumber} styleProps={{ width: 850 }} onChange={setAccountNumber} /> : <span>{mentee?.accountNumber}</span>}
                </div>
              </div>
              <BtnSubmit title="인출하기" styleProps={{ width: 75, height: 35, backgroundColor: "rgb(16, 16, 22)", color: "white" }} />
            </div>
          </DefaultInfoForm>
          {modifyModeToggle ? (
            <BtnSubmit title="저장하기" styleProps={{ width: "100%", height: 60, backgroundColor: "rgb(18, 132, 246)", color: "white" }} onClick={onSave} />
          ) : (
            <BtnSubmit title="수정하기" styleProps={{ width: "100%", height: 60, backgroundColor: "rgb(239, 241, 245)", color: "black" }} onClick={onModify} />
          )}
        </>
      </Container>
    </div>
  );
};

export default MenteeInfo;

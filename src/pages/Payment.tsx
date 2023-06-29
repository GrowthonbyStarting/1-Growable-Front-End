import React, { ReactElement } from "react";
import DefaultInfoForm from "../components/DefaultInfoForm";
import Container from "../layouts/Container";
import BtnSubmit from "../molecules/buttons/BtnSubmit";
import { usePreventUrlAccess } from "../hooks/usePreventUrlAccess";
import { useLocation } from "react-router-dom";
import { Lecture } from "../types/interfaces/Model";
import { weekDiff } from "../utils/helper";

const PaymentDetail = ({ title, content }: { title: string; content: string }): ReactElement => {
  return (
    <div className="payment__detail-child">
      <span>{title}</span>
      <span>{content}</span>
    </div>
  );
};

const Payment = (): ReactElement => {
  const location = useLocation();
  const { param }: { param: Lecture } = location.state;

  usePreventUrlAccess();

  return (
    <div className="payment common-background">
      <Container isColumn height={1000}>
        <>
          <DefaultInfoForm title="결제" height={370} padding={45}>
            <div className="payment__info">
              <div className="payment__title">
                <span>{param.mentorName}님의 챌린지를 신청하셨습니다.</span>
              </div>
              <div className="payment__detail">
                <PaymentDetail title="멘토 정보" content={param.mentorName} />
                <PaymentDetail title="챌린지 분야" content={param.mentor.category ?? "-"} />
                <PaymentDetail title="챌린지 기간" content={`${weekDiff(new Date(param.lectureStartDate), new Date(param.lectureEndDate)).toString()}주`} />
              </div>
            </div>
          </DefaultInfoForm>
          <DefaultInfoForm title="결제 금액" height={500} padding={45}>
            <div className="payment__info">
              <div className="payment__bill">
                <div className="payment__bill-calc">
                  <div className="payment__price">
                    <span>가격</span>
                    <span>{param.fee.toLocaleString()}</span>
                  </div>
                  <span>+</span>
                  <div className="payment__price">
                    <span>환급금</span>
                    <span>20,000원</span>
                  </div>
                </div>
                <div className="payment__bill-total">
                  <div className="payment__price">
                    <span>총 결제 금액</span>
                    <span className="payment__price--cobalt">{(param.fee - 20000).toLocaleString()}원</span>
                  </div>
                </div>
              </div>
              <div className="payment__refund">
                <span>* 100% 출석하면 20,000원 환급!</span>
              </div>
              <div className="payment__option">
                <span>환불 정책</span>
                <div className="payment__policy">
                  <span>- 멘토의 사정으로 인해 챌린지가 취소 된 경우 자동 취소 및 100% 환불됩니다.</span>
                  <span>- 챌린지가 시작되기 전, 결제 완료 후 7일 이내에 취소할 경우 100% 환불됩니다.</span>
                </div>
                <BtnSubmit title="챌린지 및 결제 정보를 확인하였으며, 이에 동의합니다." styleProps={{ width: "100%", height: 55, backgroundColor: "rgb(18, 132, 246)", color: "white" }} />
              </div>
            </div>
          </DefaultInfoForm>
        </>
      </Container>
    </div>
  );
};

export default Payment;

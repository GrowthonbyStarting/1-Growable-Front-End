import React, { ReactElement } from "react";
import DefaultInfoForm from "../components/DefaultInfoForm";
import Container from "../layouts/Container";

const PaymentDetail = ({ title, content }: { title: string; content: string }): ReactElement => {
  return (
    <div className="payment__detail-child">
      <span>{title}</span>
      <span>{content}</span>
    </div>
  );
};

const Payment = (): ReactElement => {
  return (
    <div className="payment common-background">
      <Container isColumn height={1000}>
        <>
          <DefaultInfoForm title="결제" height={370} padding={45}>
            <div className="payment__info">
              <div className="payment__title">
                <span>이건환님의 챌린지를 신청하셨습니다.</span>
              </div>
              <div className="payment__detail">
                <PaymentDetail title="멘토 정보" content="이건한" />
                <PaymentDetail title="멘토 정보" content="이건한" />
                <PaymentDetail title="멘토 정보" content="이건한" />
              </div>
            </div>
          </DefaultInfoForm>
          <DefaultInfoForm title="결제 금액" height={500} padding={45}>
            <div className="payment__info">
              <div className="payment__bill">
                <div className="payment__bill-calc">
                  <div className="payment__price">
                    <span>가격</span>
                    <span>10,000원</span>
                  </div>
                  <span>+</span>
                  <div className="payment__price">
                    <span>추가 서비스</span>
                    <span>0원</span>
                  </div>
                </div>
                <div className="payment__bill-total">
                  <div className="payment__price">
                    <span>총 결제 금액</span>
                    <span className="payment__price--cobalt">10,000원</span>
                  </div>
                </div>
              </div>
              <div className="payment__option"></div>
            </div>
          </DefaultInfoForm>
        </>
      </Container>
    </div>
  );
};

export default Payment;

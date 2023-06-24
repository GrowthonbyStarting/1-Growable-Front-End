import React, { ReactElement } from "react";

const BtnSubmitPayment = (): ReactElement => {
  const onClick = (): void => {};
  return (
    <button className="btn-submit-payment" onClick={onClick}>
      챌린지 및 결제 정보를 확인하였으며, 이에 동의합니다.
    </button>
  );
};

export default BtnSubmitPayment;

import React, { ReactElement } from "react";
import BtnKakaoLogin from "../molecules/buttons/BtnKakaoLogin";
import Container from "../layouts/Container";

const Login = (): ReactElement => {
  return (
    <div className="login">
      <div className="login__mask">
        <Container isColumn height={400} paddingTop={"5%"}>
          <>
            <div className="login__desc1">
              <span>세상에 없던</span>
              <span>이력서의 시작</span>
            </div>
            <div className="login__desc2">
              <span>나를 잘 표현한 이력서,</span>
              <span>지금 바로 작성해 보세요</span>
            </div>
            <BtnKakaoLogin />
          </>
        </Container>
      </div>
    </div>
  );
};

export default Login;

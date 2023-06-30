import React, { ReactElement } from "react";
import Container from "../layouts/Container";
import DefaultInfoForm from "../components/DefaultInfoForm";
import BtnSubmit from "../molecules/buttons/BtnSubmit";
import { useNavigate } from "react-router-dom";
import { User } from "../types/interfaces/Model";
import { useSelector } from "react-redux";
import { RootState } from "../stores/RootReducer";

const ChoiceIdentity = (): ReactElement => {
  const user: User = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();

  const navigateToMentee = (): void => {
    navigate("/mentee-info");
  };

  const navigateToMentor = (): void => {
    navigate("/mentor-info");
  };
  return (
    <div className="choice-identity common-background ">
      <Container isColumn>
        <DefaultInfoForm title="멘토, 멘티 선택" height={500}>
          <div className="choice-identity__content">
            <div className="choice-identity__btnBox">
              <BtnSubmit title="멘티" onClick={navigateToMentee} styleProps={{ width: 100, height: 50, backgroundColor: "black", color: "white", marginRight: 30 }} />
              <BtnSubmit title="멘토" onClick={navigateToMentor} styleProps={{ width: 100, height: 50, backgroundColor: "black", color: "white" }} />
            </div>
          </div>
        </DefaultInfoForm>
      </Container>
    </div>
  );
};

export default ChoiceIdentity;

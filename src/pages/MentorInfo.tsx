import React, { ReactElement, useState } from "react";
import Container from "../layouts/Container";
import DefaultInfoForm from "../components/DefaultInfoForm";
import { MentorInfoCategory } from "../types/enums";
import InputUserInfo from "../molecules/inputs/InputUserInfo";
import PickerDate from "../molecules/picker/PickerDate";
import PickerOptions from "../molecules/picker/PickerOptions";
import { majorField } from "../utils/constants";
import BtnSubmit from "../molecules/buttons/BtnSubmit";
import BtnModify from "../molecules/buttons/BtnModify";

interface MentorCategoryProps {
  title: string;
  category: MentorInfoCategory;
  currentCategory: MentorInfoCategory;
  onClick: (category: MentorInfoCategory) => void;
}

const MentorCategory = ({ title, currentCategory, category, onClick }: MentorCategoryProps): ReactElement => {
  return (
    <div className={`mentor-info__category-item ${currentCategory === category ? "mentor-info__category-item--background-grey" : ""}`} onClick={() => onClick(category)}>
      <span>{title}</span>
    </div>
  );
};

const DefaultCategory = (): ReactElement => {
  const [selectedMajorField, setSelectedMajorField] = useState<string | null>(null);

  const getSelectedMajorField = (value: string): void => {
    setSelectedMajorField(value);
  };

  return (
    <DefaultInfoForm title="기본 정보" height={550}>
      <div className="mentor-info__common">
        <div className="mentor-info__upper mentor-info__upper--default">
          <PickerOptions title="전문분야" options={majorField} value={selectedMajorField} onChange={getSelectedMajorField} placeholder="분야를 선택해 주세요" />
          <div className="mentor-info__space-width" />
          <InputUserInfo placeholder="세부 분야를 입력해 주세요 (예: 백엔드, 구매관리, 제품영업)" width={330} />
        </div>
        <InputUserInfo placeholder="키워드" width={850} height={130} title="나를 나타내는 키워드" />
        <div className="mentor-info__footer">
          <div className="mentor-info__btnbox">
            <BtnModify title="수정하기" color="rgb(200, 205, 210)" />
            <BtnModify title="삭제하기" />
          </div>
        </div>
      </div>
    </DefaultInfoForm>
  );
};

const WorkExpCategory = (): ReactElement => {
  const [workStartDay, setWorkStartDay] = useState<Date | null>(null);
  const [workEndDay, setWorkEndDay] = useState<Date | null>(null);

  const getWorkStartDay = (date: Date): void => {
    setWorkStartDay(date);
  };

  const getWorkEndDay = (date: Date): void => {
    setWorkEndDay(date);
  };

  return (
    <DefaultInfoForm title="업무 경력" height={600}>
      <div className="mentor-info__common">
        <div className="mentor-info__upper">
          <InputUserInfo title="회사 정보" placeholder="근무하신 회사 이름을 알려주세요" width={365} />
          <div className="mentor-info__space-height" />
          <div className="mentor-info__select-box">
            <PickerOptions options={majorField} value={"asdf"} onChange={() => {}} placeholder="근무 형태를 알려주세요" />
            <div className="mentor-info__space-width" />
            <PickerOptions options={majorField} value={"asdf"} onChange={() => {}} placeholder="담당 직무를 알려주세요" />
          </div>
        </div>
        <div className="mentor-info__lower">
          <div className="mentor-info__select-box">
            <PickerDate title="근무기간" placeholder="YYYY.MM" selected={workStartDay} onChange={getWorkStartDay} />
            <div className="mentor-info__space-width" />
            <PickerDate placeholder="YYYY.MM" selected={workEndDay} onChange={getWorkEndDay} />
          </div>
          <div className="mentor-info__space-height" />
          <span>
            <label className="mentor-info__label-text">
              <input type="checkbox" />
              지금 다니고 있어요
            </label>
          </span>
        </div>
        <div className="mentor-info__footer">
          <div className="mentor-info__btnbox">
            <BtnModify title="수정하기" color="rgb(200, 205, 210)" />
            <BtnModify title="삭제하기" />
          </div>
        </div>
      </div>
    </DefaultInfoForm>
  );
};

const LectureExpCategory = (): ReactElement => {
  const [lectureStartDay, setLectureStartDay] = useState<Date | null>(null);
  const [lectureEndDay, setLectureEndDay] = useState<Date | null>(null);

  const getLectureStartDay = (date: Date): void => {
    setLectureStartDay(date);
  };

  const getLectureEndDay = (date: Date): void => {
    setLectureEndDay(date);
  };

  return (
    <DefaultInfoForm title="업무 경력" height={600}>
      <div className="mentor-info__common">
        <div className="mentor-info__upper">
          <InputUserInfo title="강의 정보" placeholder="강의명을 알려주세요" width={365} />
          <div className="mentor-info__space-height" />
          <InputUserInfo placeholder="강의가 진행되었던 회사 이름을 알려주세요" width={365} />
          <div className="mentor-info__space-height" />
          <div className="mentor-info__select-box">
            <PickerOptions options={majorField} value={"asdf"} onChange={() => {}} placeholder="강의 형태를 알려주세요" />
            <div className="mentor-info__space-width" />
            <PickerOptions options={majorField} value={"asdf"} onChange={() => {}} placeholder="강의 분야를 알려주세욘" />
          </div>
        </div>
        <div className="mentor-info__lower">
          <div className="mentor-info__select-box">
            <PickerDate title="강의기간" placeholder="YYYY.MM" selected={lectureStartDay} onChange={getLectureStartDay} />
            <div className="mentor-info__space-width" />
            <PickerDate placeholder="YYYY.MM" selected={lectureEndDay} onChange={getLectureEndDay} />
          </div>
          <div className="mentor-info__space-height" />
          <span>
            <label className="mentor-info__label-text">
              <input type="checkbox" />
              지금 강의중이에요
            </label>
          </span>
        </div>
        <div className="mentor-info__footer">
          <div className="mentor-info__btnbox">
            <BtnModify title="수정하기" color="rgb(200, 205, 210)" />
            <BtnModify title="삭제하기" />
          </div>
        </div>
      </div>
    </DefaultInfoForm>
  );
};

const MentorInfo = (): ReactElement => {
  const [currentCategory, setCurrentCategory] = useState<MentorInfoCategory>(MentorInfoCategory.DEFAULT);

  const onCategoryClick = (category: MentorInfoCategory): void => {
    setCurrentCategory(category);
  };

  const onCurrentCategory = (): ReactElement => {
    switch (currentCategory) {
      case MentorInfoCategory.DEFAULT:
        return <DefaultCategory />;
      case MentorInfoCategory.WORK_EXP:
        return <WorkExpCategory />;
      case MentorInfoCategory.LECTURE_EXP:
        return <LectureExpCategory />;
      default:
        return <DefaultCategory />;
    }
  };

  return (
    <div className="mentor-info common-background">
      <Container isColumn={false} width={1500} paddingTop={100}>
        <>
          {onCurrentCategory()}
          <div className="mentor-info__category common-form">
            <MentorCategory title="기본 정보" category={MentorInfoCategory.DEFAULT} currentCategory={currentCategory} onClick={onCategoryClick} />
            <MentorCategory title="업무 경력" category={MentorInfoCategory.WORK_EXP} currentCategory={currentCategory} onClick={onCategoryClick} />
            <MentorCategory title="강의 경력" category={MentorInfoCategory.LECTURE_EXP} currentCategory={currentCategory} onClick={onCategoryClick} />
          </div>
        </>
      </Container>
    </div>
  );
};

export default MentorInfo;

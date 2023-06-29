import React, { ReactElement, useEffect, useState } from "react";
import ChallengeList from "../components/ChallengeList";
import BtnChallengeCategory from "../molecules/buttons/BtnChallengeCategory";
import { fetchLectureList } from "../apis/LectureApi";
import { Lecture } from "../types/interfaces/Model";

const Challenge = (): ReactElement => {
  const [lectureList, setLectureList] = useState<Lecture[]>([]);

  useEffect(() => {
    fetchLectureData();
  }, []);

  const fetchLectureData = async (): Promise<void> => {
    const lectures: Lecture[] = await fetchLectureList();
    setLectureList(lectures);
  };

  return (
    <div className="challenge">
      <div className="challenge__options">
        <div className="challenge__title">
          <span>Challenge</span>
          <span>마음에 드는 멘토님에게 연락해 팀을 이뤄보세요!</span>
        </div>
        <div className="challenge__category">
          <BtnChallengeCategory title="전체" />
          <BtnChallengeCategory title="IT" />
          <BtnChallengeCategory title="디자인" />
        </div>
      </div>
      <div className="challenge__lists">
        {lectureList.map((lecture, idx) => {
          return <ChallengeList key={idx} lecture={lecture} />;
        })}
      </div>
    </div>
  );
};

export default Challenge;

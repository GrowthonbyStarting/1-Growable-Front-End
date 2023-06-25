import { Identity } from "../enums";

export interface User {
  userCode: string;
  kakaoId: string;
  kakaoProfileImg: string;
  kakaoNickname: string;
  kakaoEmail: string;
  userRole: string;
  createTime: Date;
  // mentor: Mentor;
  // mentee: Mentee;
}

export interface Mentee {
  menteeId: number;
  imageUrl: string;
  name: string;
  email: string;
  identity: Identity;
  Point: number;
  phoneNumber: string;
  StartingUrl: string;
  profileImageUrl: string;
  lecture: Lecture;
  enrollments: Enrollment[];
}

export interface Mentor {
  mentorId: number;
  name: string;
  email: string;
  identity: Identity;
  point: number;
  chatUrl: string;
  category: string;
  subcategory: string;
  keywords: string[];
  companyInfos: Company[];
  lectureExperiences: LectureExperience[];
  profileImageUrl: string;
  lectures: Lecture[];
  enrollments: Enrollment[];
}

export interface Company {
  id: number;
  companyName: string;
  workType: string;
  position: string;
  startDate: string;
  endDate: string;
}

export interface Enrollment {
  id: number;
  lecture: Lecture;
  mentee: Mentee;
  mentor: Mentor;
}

export interface Lecture {
  id: number;
  title: string;
  recruitmentStartDate: Date;
  recruitmentEndDate: Date;
  capacity: number;
  fee: number;
  lectureStartDate: Date;
  lectureEndDate: Date;
  mentorName: string;
  status: string;
  mentor: Mentor;
  mentee: Mentee[];
  teamUrl: string;
  enrollments: Enrollment[];
}

export interface LectureExperience {
  id: number;
  lectureTitle: string;
  companyName: string;
  lectureType: string;
  lectureField: string;
  startDate: string;
  endDate?: string;
}

export interface Review {
  id: number;
  lecture: Lecture;
  mentee: Mentee;
  content: string;
  like: boolean;
  mentor: Mentor;
}

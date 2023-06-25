export const LectureStatus = {
  NOT_STARTED: "ROLE_NOT_STARTED",
  RECRUITING: "ROLE_RECRUITING",
  RECRUITMENT_ENDED: "ROLE_RECRUITMENT_ENDED",
  LECTURE_ENDED: "ROLE_LECTURE_ENDED",
} as const;

export const Identity = {
  MENTEE: "ROLE_MENTEE",
  MENTOR: "ROLE_MENTOR",
} as const;

export const MentorInfoCategory = {
  DEFAULT: "DEFAULT",
  WORK_EXP: "WORK_EXP",
  LECTURE_EXP: "LECTURE_EXP",
} as const;

export type LectureStatus = (typeof LectureStatus)[keyof typeof LectureStatus];
export type Identity = (typeof Identity)[keyof typeof Identity];
export type MentorInfoCategory = (typeof MentorInfoCategory)[keyof typeof MentorInfoCategory];

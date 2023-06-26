import { Identity } from "../enums";

export interface BecomeMenteeRequest {
  email: string;
  identity: Identity;
  imageUrl: string;
  menteeId: number;
  name: string;
  phoneNumber: string;
  point: number;
  startingUrl: string;
}

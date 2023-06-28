import { atom } from "recoil";

interface IUserState {
  _id: string;
  createdAt: string;
  email: string;
  imageSrc: string;
  nickname: string;
  updatedAt: string;
}

export const userState = atom<IUserState>({
  key: "userState",
  default: {
    _id: "",
    createdAt: "",
    email: "",
    imageSrc: "",
    nickname: "",
    updatedAt: ""
  }
});

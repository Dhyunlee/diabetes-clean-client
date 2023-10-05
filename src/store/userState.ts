import { IUserInfo } from "models/data";
import { atom } from "recoil";

export const userState = atom<IUserInfo>({
  key: "userState",
  default: {
    _id: "",
    email: "",
    nickname: "",
    aboutMe: "",
    followers: [],
    followings: [],
    imageSrc: "",
    createdAt: "",
    updatedAt: ""
  }
});

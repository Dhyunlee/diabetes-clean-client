import { atom } from "recoil";

export const headerViewState = atom<boolean>({
  key: "headerViewState",
  default: false
});

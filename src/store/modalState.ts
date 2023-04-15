import { atom } from "recoil";

interface IModalState {
  isOpen: boolean;
}

export const modalState = atom<IModalState>({
  key: "modalState",
  default: {
    isOpen: false,
  },
});

import { IDiabetesInfo } from "models/db";
import { atom } from "recoil";

export interface ITextInfo {
  text: string;
}

export interface IModalState {
  type: string | null;
  isOpen: boolean;
  props?: string | JSX.Element;
}

export const modalState = atom<IModalState>({
  key: "modalState",
  default: {
    type: null,
    isOpen: false,
    props: ""
  }
});

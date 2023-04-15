import { IDiabetesInfo } from "models/db";
import { atom } from "recoil";

export interface IModalState {
  type: string | null;
  isOpen: boolean;
  data?: IDiabetesInfo;
}

export const modalState = atom<IModalState>({
  key: "modalState",
  default: {
    type: null,
    isOpen: false,
    data: {_id: '', sugar_level: 0, slot: '', createdAt: ''}
  },
});

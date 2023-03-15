export interface IUser {
  readonly _id: string;
  email: string;
  nickname: string;
  imageSrc: string;
}

export interface IAuthResponse {
  ok: boolean;
  token: string;
}

export interface IDiabetes {
  readonly _id: string;
  writer?: string;
  GI: number;
  slot: string;
  createdAt: Date;
}

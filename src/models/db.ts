export interface IAuthRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  isOk: boolean;
  accessToken: string;
}

export interface IUserInfo {
  readonly _id: string;
  createdAt: string;
  email: string;
  followers: [];
  followings: [];
  imageSrc: string;
  nickname: string;
  updatedAt: string;
}

export interface IUserResponse {
  isOk: boolean;
  userInfo: IUserInfo;
}

export interface iDiabetesRequest {
  writer: string;
  sugar_level: number;
  slot: string;
  note: string;
  createdAt: string;
}

export interface IDiabetesInfo {
  readonly _id: string;
  writer?: string;
  sugar_level: number;
  slot: string;
  createdAt: string;
  note?: string;
}

export interface IDiabetesResponse {
  isOk: boolean;
  diabetesInfo: IDiabetesInfo[];
}

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

export interface IDiabetesInfo {
  readonly _id: string;
  writer?: string;
  GI: number;
  slot: string;
  createdAt: Date;
}
export interface IDiabetesResponse {
  isOk: boolean;
  diabetesInfo: IDiabetesInfo[];
}

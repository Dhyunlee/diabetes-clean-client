export interface CommonResponse {
  isOk: boolean,
  msg: string
}

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
export type IWriterInfo = Pick<IUserInfo, "_id" | "nickname" | "imageSrc">;

export interface IUserResponse {
  isOk: boolean;
  userInfo: IUserInfo;
}

export interface iDiabetesRequest {
  writer: string;
  sugar_level: number;
  slot: string;
  note: string;
  createdAt: Date | string;
}

export interface IDiabetesInfo {
  readonly _id: string;
  writer?: string;
  sugar_level: number;
  slot: string;
  createdAt: Date | string;
  note?: string;
}

export interface IDiabetesResponse {
  isOk: boolean;
  diabetesInfo: IDiabetesInfo[];
}

export interface IContents {
  _id: string;
  writer: IWriterInfo;
  content: string;
  iamgeName: string;
  imageUrl: string;
  createdAt: Date | string;
  updateAt: Date | string;
  isDeleted?: boolean;
}
export interface IContentsResponse {
  isOk: boolean;
  contents: IContents[];
}

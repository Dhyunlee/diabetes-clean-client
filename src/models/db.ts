export interface CommonResponse {
  isOk: boolean;
  msg: string;
}

export interface IAuthRequest {
  email: string;
  password: string;
  nickname: string;
}

export type TAuthRequest = Omit<IAuthRequest, "nickname">;

export interface IAuthResponse extends CommonResponse {
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
export type IWriterInfo = Pick<
  IUserInfo,
  "_id" | "nickname" | "imageSrc" | "email"
>;

export interface IUserResponse {
  isOk: boolean;
  userInfo: IUserInfo;
}

export interface IDiabetesRequest {
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
  diabetesInfo: IDiabetesInfo[] | IDiabetesInfo;
}

export interface IContentsRequest {
  writer: string;
  content: string;
  imageName?: string;
  imageUrl?: string;
}

export interface IContents {
  _id: string;
  writer: IWriterInfo;
  content: string;
  imageName: string;
  imageUrl: string;
  createdAt: Date | string;
  updateAt: Date | string;
  isDeleted: boolean;
}
export interface IContentsResponse {
  isOk: boolean;
  contents: IContents[];
}

export interface ICommentRequest {
  writer: string;
  contentsId: string;
  parentCommentId?: string;
  content: string;
}

export interface IComment {
  _id: string;
  writer: IWriterInfo;
  contentsId: string;
  parentCommentId: string;
  content: string;
  createdAt: Date | string;
  updateAt: Date | string;
  isDeleted: boolean;
}

export interface ICommentResponse {
  isOk: boolean;
  comment: IComment[];
}

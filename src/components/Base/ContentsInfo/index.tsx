import dayjs from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../Avatar";
import { ContentsInfoInterface } from "./styles";

interface IProps {
  userName: string;
  imgUrl: string;
  imgName?: string;
  imgSize?: number;
  link: string;
  createdAt?: Date | string;
}

const ContentsInfo = ({
  imgUrl,
  imgName,
  link,
  imgSize,
  userName,
  createdAt,
}: IProps) => {
  const navigate = useNavigate();
  return (
    <ContentsInfoInterface>
      <div className="left-img" onClick={() => navigate(link)}>
        <Avatar size={imgSize ?? 45} imgName={imgName ?? "avatar-img"} imgUrl={imgUrl} />
      </div>
      <div className="right-info">
        <div className="user_name" onClick={() => navigate(link)}>
          <span>{userName}</span>
        </div>
        <div className="saved_date">
          <span>1시간전</span>
        </div>
      </div>
    </ContentsInfoInterface>
  );
};

export default ContentsInfo;

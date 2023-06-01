import dayjs from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../Avatar";
import { ContentsInfoInterface } from "./styles";
import { tiemBefore } from "utils/functions/tiemBefore";

interface IProps {
  userName: string;
  imgUrl?: string;
  imgName?: string;
  imgSize?: number;
  link: string;
  createdAt: Date | string;
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
        <div className="user_name">
          <span onClick={() => navigate(link)}>{userName}</span>
        </div>
        <div className="saved_date">
          <span>{tiemBefore(createdAt)}</span>
        </div>
      </div>
    </ContentsInfoInterface>
  );
};

export default ContentsInfo;

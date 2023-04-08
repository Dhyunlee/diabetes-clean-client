import React from "react";
import { PostContentInterface } from "./styles";

interface Iprops {
  imgUrl: string;
  imgName: string;
  content: string;
}

const PostContent = ({ imgUrl, imgName, content }: Iprops) => {
  return (
    <PostContentInterface>
      <div className="img-wrap">
        <img src={imgUrl} alt={imgName ?? ""} />
      </div>
      <div className="content-wrap">
        <p>{content}</p>
      </div>
    </PostContentInterface>
  );
};

export default PostContent;

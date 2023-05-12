import { useMemo } from "react";
import { useQuery } from "react-query";
import PostItem from "../PostItem";
import { PostCardContainer } from "./styles";
import { IContentsResponse } from "models/db";
import { getAllContents } from "utils/apis/contents";

const fakeCommentData = [
  {
    ContentsId: 1,
    writer: {
      userName: "Nike129",
      imgUrl: "https://avatars.githubusercontent.com/u/58792751?s=40&v=4",
    },
    content: "당수치 잘 관리하셔야돼요! 응원합니다.",
  },
  {
    ContentsId: 2,
    writer: {
      userName: "Nike128",
      imgUrl: "https://mui.com/static/images/avatar/1.jpg",
    },
    content: "당수치 잘 관리하셔야돼요! 응원합니다.",
  },
];

const PostCards = () => {
  const {
    data: contentsData,
    isError,
    isLoading,
  } = useQuery<IContentsResponse>("contents", () => getAllContents());
  const contents = useMemo(() => contentsData?.contents, [contentsData]);
  console.log(contents)
  if(contents === undefined && isLoading) {
    return <div>포스팅 불러오는중</div>
  }
  return (
    <PostCardContainer className="post">
      {contents && contents.length > 0 ? (
        contents?.map((postData) => (
          <PostItem key={postData._id} {...postData} />
        ))
      ) : (
        <div>업로드한 포스팅이 없습니다.</div>
      )}
    </PostCardContainer>
  );
};

export default PostCards;

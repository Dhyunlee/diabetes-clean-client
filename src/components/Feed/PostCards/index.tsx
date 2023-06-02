import { useMemo } from "react";
import PostItem from "components/Feed/PostItem";
import { useContentsQuery } from "hooks/services/queries";
import { PostCardContainer } from "./styles";

const PostCards = () => {
  const { data: contentsData, isError, isLoading } = useContentsQuery();
  const contents = useMemo(() => contentsData?.contents, [contentsData]);
  if (contents === undefined && isLoading) {
    return <div>포스팅 불러오는중</div>;
  }
  if (isError) {
    return (
      <div>
        포스팅을 불러오는데 실패했습니다.
      </div>
    );
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

import { PostCardWrap } from "./styles";
import PostItem from "./PostItem";
import { IContents, ILike } from "models/db";
/*
  모든 무한 스크롤 적용하기 전 로직
  - 모든 Post 관련 컴포넌트에 무한 스크롤 적용후 삭제.
*/
interface Iprops {
  data?: IContents[] | ILike[];
  isError?: boolean;
  isLoading?: boolean;
}

const OriginPost = (props: Iprops) => {
  const { data: contents, isError, isLoading } = props;
  if (!contents && isLoading) {
    return <div>포스팅 불러오는중</div>;
  }
  if (isError) {
    return <div>포스팅을 불러오는데 실패했습니다.</div>;
  }
  return (
    <PostCardWrap className="post">
      {contents && contents.length > 0 ? (
        contents?.map((postData: any) => (
          <PostItem key={postData._id} {...postData} />
        ))
      ) : (
        <div>업로드한 포스팅이 없습니다.</div>
      )}
    </PostCardWrap>
  );
};

export default OriginPost;

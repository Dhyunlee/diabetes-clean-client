import { PostCardWrap } from "./styles";
import PostItem from "./PostItem";
import { IContents } from "models/db";

interface Iprops {
 data?: IContents[];
 isError?: boolean;
 isLoading?: boolean;
}

const Posts = (props: Iprops) => {
  console.log(props)
  const {data: contents, isError, isLoading } = props;

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

export default Posts;

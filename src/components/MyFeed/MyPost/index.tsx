import { useParams } from "react-router-dom";
import MyPosts from "components/Posts";
import { getUserContents } from "utils/apis/contents";

// 내 게시글
const MyPost = () => {
  const { username } = useParams();
  return (
    <MyPosts
      params={username as string}
      queryKey="myfeed"
      fetcher={getUserContents}
    />
  );
};

export default MyPost;

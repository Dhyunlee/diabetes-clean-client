import { useParams } from "react-router-dom";
import MyPosts from "components/Posts/PostContext";
import { getUserContents } from "utils/apis/contents";

// 내 게시글
const MyPost = () => {
  const { username } = useParams();
  return <MyPosts params={username as string} fetcher={getUserContents} />;
};

export default MyPost;

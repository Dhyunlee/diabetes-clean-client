import { useParams } from "react-router-dom";
import LikedPosts from "components/Posts/PostContext";
import { getLikedPosts } from "utils/apis/contents";

// 관심글
const LikedPost = () => {
  const { username } = useParams();
  return <LikedPosts params={username as string} fetcher={getLikedPosts} />;
};

export default LikedPost;

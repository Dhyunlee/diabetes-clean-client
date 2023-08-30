import { useParams } from "react-router-dom";
import LikedPosts from "components/Posts/OriginPost";
import { Like_key } from "constants/query_key";
import { useAPIByIdQuery } from "hooks/service/queries";
import { IContents, ILikeResponse } from "models/db";
import { getLikedPosts } from "utils/apis/contents";

// 관심글
const LikedPost = () => {
  const { username } = useParams();
  const queryKey = `${Like_key}/${username}`;
  const { data, isError, isLoading } = useAPIByIdQuery<IContents[]>(
    username as string,
    queryKey,
    getLikedPosts
  );
  console.log({ data });
  return <LikedPosts data={data} isError={isError} isLoading={isLoading} />;
};

export default LikedPost;

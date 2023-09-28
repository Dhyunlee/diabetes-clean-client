import { useParams } from "react-router-dom";
import LikedPosts from "components/Posts";
<<<<<<< HEAD
import { Like_key } from "constants/query_key";
import { useAPIByIdQuery } from "hooks/service/queries";
import { IContents, ILikeResponse } from "models/db";
=======
>>>>>>> cc88da3cb615370ab693ae822174ade8b0cb1ddb
import { getLikedPosts } from "utils/apis/contents";

// 관심글
const LikedPost = () => {
  const { username } = useParams();
<<<<<<< HEAD
  const queryKey = `${Like_key}/${username}`;
  const { data, isError, isLoading } = useAPIByIdQuery<IContents[]>(
    username as string,
    queryKey,
    getLikedPosts
  );
  console.log({ data });
  return <LikedPosts data={data} isError={isError} isLoading={isLoading} />;
=======
  return (
    <LikedPosts
      params={username as string}
      queryKey="liked_contents"
      fetcher={getLikedPosts}
    />
  );
>>>>>>> cc88da3cb615370ab693ae822174ade8b0cb1ddb
};

export default LikedPost;

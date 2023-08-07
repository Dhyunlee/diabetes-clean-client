import { useParams } from "react-router-dom";
import MyPosts from "components/Posts";
import useAPIByIdQuery from "hooks/service/queries/useAPIByIdQuery";
import { IContentsResponse } from "models/db";
import { CONTENTS_KEY } from "constants/query_key";
import { getUserContents } from "utils/apis/contents";

// 내 게시글
const MyPost = () => {
  const { username } = useParams();
  const queryKey = `${CONTENTS_KEY}/${username}`;
  const { data, isError, isLoading } = useAPIByIdQuery<IContentsResponse>(
    username as string,
    queryKey,
    getUserContents
  );

  return (
    <MyPosts data={data?.contents} isError={isError} isLoading={isLoading} />
  );
};

export default MyPost;

import { useParams } from "react-router-dom";
import { useUserContentsQuery } from "hooks/services/queries";
import MyPosts from "components/Posts";

const MyPost = () => {
  const { username } = useParams();
  const { data, isError, isLoading } = useUserContentsQuery(username as string);
  return (
    <MyPosts data={data?.contents} isError={isError} isLoading={isLoading} />
  );
};

export default MyPost;

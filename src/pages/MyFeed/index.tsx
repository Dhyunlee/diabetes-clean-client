import { useParams } from "react-router-dom";

const MyFeed = () => {
  const { username } = useParams();

  return <div>{username}님 Feed</div>;
};

export default MyFeed;

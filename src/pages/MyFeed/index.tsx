import { useParams } from "react-router-dom";

const MyFeed = () => {
  const { write } = useParams();

  return <div>{write}님 Feed</div>;
};

export default MyFeed;

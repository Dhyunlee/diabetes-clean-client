import SubButtonMenu from "components/Base/SubBtnMenu";
import PostCards from "./PostCards";
import { PostCardsWrap, StoryWarp } from "./styles";
import { useQuery } from "react-query";
import { IUserResponse } from "models/db";
import { getUserApi } from "utils/apis/userApis";

const Feed = () => {
  const {
    data: userData,
  } = useQuery<IUserResponse>("user", getUserApi);
  
  const write = userData?.userInfo?.nickname;
  return (
    <StoryWarp>
      <PostCardsWrap>
        <PostCards />
      </PostCardsWrap>
      <SubButtonMenu
        menuItems={[
          {
            id: 1,
            path: "/story/save",
            targetName: "작성하기",
          },
          {
            id: 2,
            path: `/profile/${write}`,
            targetName: "내피드",
          },
        ]}
      />
    </StoryWarp>
  );
};

export default Feed;

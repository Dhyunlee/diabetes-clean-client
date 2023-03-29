import SubButtonMenu from "components/Base/SubBtnMenu";
import PostCards from "../PostCards";
import { PostCardsWrap, StoryWarp } from "./styles";

const Feed = () => {
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
            path: "/story/me",
            targetName: "내피드",
          },
        ]}
      />
    </StoryWarp>
  );
};

export default Feed;

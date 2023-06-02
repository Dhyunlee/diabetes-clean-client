import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import PostCards from "./PostCards";
import { ROUTER_PATH } from "constants/router_path";
import SideBtnMenu from "components/Base/SideBtnMenu";
import { userState } from "store/userState";
import { PostCardsWrap, StoryWarp } from "./styles";

const Feed = () => {
  const userInfo = useRecoilValue(userState);
  const { SAVE_CONTENTS, STORY } = ROUTER_PATH;
  
  const menuItem = useMemo(
    () => [
      {
        id: 1,
        path: `${SAVE_CONTENTS}`,
        label: "작성하기",
      },
      {
        id: 2,
        path: `${STORY}/${userInfo.nickname}`,
        label: "내피드",
      },
    ],
    [SAVE_CONTENTS, STORY, userInfo.nickname]
  );
  return (
    <StoryWarp>
      <PostCardsWrap>
        <PostCards />
      </PostCardsWrap>
      <SideBtnMenu menuItem={menuItem} />
    </StoryWarp>
  );
};

export default Feed;

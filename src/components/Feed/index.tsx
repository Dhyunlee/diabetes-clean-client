import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { ROUTER_PATH } from "constants/router_path";
import FeedPosts from "components/Posts";
import SideBtnMenu from "components/Base/SideBtnMenu";
import { userState } from "store/userState";
import { StoryWarp } from "./styles";
import { useContentsQuery } from "hooks/services/queries";

const Feed = () => {
  const { SAVE_CONTENTS, STORY } = ROUTER_PATH;
  const { data, isError, isLoading } = useContentsQuery();
  const userInfo = useRecoilValue(userState);

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
      <FeedPosts
        data={data?.contents}
        isError={isError}
        isLoading={isLoading}
      />
      <SideBtnMenu menuItem={menuItem} />
    </StoryWarp>
  );
};

export default Feed;

import SideBtnMenu from "components/Base/SideBtnMenu";
import PostCards from "./PostCards";
import { PostCardsWrap, StoryWarp } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "utils/apis/userApis";
import { useMemo } from "react";
import { ROUTER_PATH } from "constants/router_path";

const Feed = () => {
  const { SAVE_CONTENTS, STORY } = ROUTER_PATH;
  const {data: userData} = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserApi(),
  })
  const write = userData?.userInfo?.nickname;

  const menuItem = useMemo(
    () => [
      {
        id: 1,
        path: `${SAVE_CONTENTS}`,
        targetName: "작성하기",
      },
      {
        id: 2,
        path: `${STORY}/${write}`,
        targetName: "내피드",
      },
    ],
    [SAVE_CONTENTS, STORY, write]
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

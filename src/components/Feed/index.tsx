import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { ROUTER_PATH } from "constants/router_path";
// import FeedPost from "components/Posts";
import FeedPost from "components/Posts";
import SideBtnMenu from "components/Base/SideBtnMenu";
import { userState } from "store/userState";
import { StoryWarp } from "./styles";
import { getAllContents } from "utils/apis/contents";

const Feed = () => {
  const { SAVE_CONTENTS, STORY } = ROUTER_PATH;
  const userInfo = useRecoilValue(userState);

  const menuItem = useMemo(
    () => [
      {
        id: 1,
        path: `${SAVE_CONTENTS}`,
        label: "작성하기"
      },
      {
        id: 2,
        path: `${STORY}/${userInfo.nickname}`,
        label: "내피드"
      }
    ],
    [SAVE_CONTENTS, STORY, userInfo.nickname]
  );
  return (
    <StoryWarp className="posts">
      {/* 피드, 마이 피드 컴포넌트에서 데이터 불러와서 Posts 컴포넌트에서 UI 랜더링 */}
      {/* <FeedPost fetcher={getAllContents} /> */}
      <FeedPost params="" queryKey="" fetcher={getAllContents} />
      <SideBtnMenu menuItem={menuItem} />
    </StoryWarp>
  );
};

export default Feed;

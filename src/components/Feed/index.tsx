import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { ROUTER_PATH } from "constants/router_path";
import Posts from "components/Posts";
import SideBtnMenu from "components/Base/SideBtnMenu";
import { userState } from "store/userState";
import { StoryWarp } from "./styles";
import { useAPIQuery } from "hooks/service/queries";
import { IContentsResponse } from "models/db";
import { CONTENTS_KEY } from "constants/query_key";
import { getAllContents } from "utils/apis/contents";

const Feed = () => {
  const { SAVE_CONTENTS, STORY } = ROUTER_PATH;
  const userInfo = useRecoilValue(userState);
  const { data, isError, isLoading } = useAPIQuery<IContentsResponse>(
    CONTENTS_KEY,
    getAllContents
  );

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
    <StoryWarp>
      <Posts data={data?.contents} isError={isError} isLoading={isLoading} />
      <SideBtnMenu menuItem={menuItem} />
    </StoryWarp>
  );
};

export default Feed;

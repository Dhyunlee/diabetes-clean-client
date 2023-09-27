import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, Outlet } from "react-router-dom";
import gravatar from "gravatar";
import { useRecoilValue } from "recoil";
import Avatar from "components/Base/Avatar";
import NavMenu from "components/Base/NavMenu";
import Button from "components/Base/Button";
import { ROUTER_PATH } from "constants/router_path";
import { userState } from "store/userState";
import { useAPIByIdQuery } from "hooks/service/queries";
import useFollowMutation from "hooks/service/mutator/follow/useFollowMutation";
import useUnFollowMutation from "hooks/service/mutator/follow/useUnFollowMutation";
import { getMyFeedInfo } from "utils/apis/contents";
import { getFollow } from "utils/apis/follow";
import { CONTENTS_KEY, FOLLOW_KEY } from "constants/query_key";
import { IFollowResponse, IMyFeedResponse } from "models/db";

import {
  MyFeedContainer,
  MyFeedWrap,
  Header,
  LeftSide,
  MainContents,
  MyFeedMain,
  UserInfo,
  UserStatus
} from "./styles";

const MyFeed = () => {
  const [isFollow, setIsFollow] = useState(false);
  const { STORY } = ROUTER_PATH;
  const { username } = useParams();
  const queryKey = `${CONTENTS_KEY}/${username}`;
  const { data, isLoading } = useAPIByIdQuery<IMyFeedResponse>(
    username as string,
    queryKey,
    getMyFeedInfo
  );
  const currentUser = useRecoilValue(userState);
  const writer = useMemo(() => data?.contents.writer, [data]);
  const { data: followData } = useAPIByIdQuery<IFollowResponse>(
    writer?._id as string,
    FOLLOW_KEY,
    getFollow
  );
  const followMutate = useFollowMutation();
  const unFollowMutate = useUnFollowMutation();
  const subMenus = [
    { id: 1, label: "내 게시글", url: `${STORY}/${username}` },
    { id: 2, label: "관심 글", url: `${STORY}/${username}/empathy` },
    { id: 3, label: "활동 내역", url: `${STORY}/${username}/activity` }
  ];
  useEffect(() => {
    if (followData && currentUser) {
      // 팔로우 버튼: 유저의 팔로워 목록에 내가 존재하는가?
      setIsFollow(followData.followInfo.followers.includes(currentUser._id));
    }
  }, [currentUser, followData, writer]);

  const onFollow = useCallback(() => {
    isFollow
      ? unFollowMutate.mutate(writer?._id as string)
      : followMutate.mutate(writer?._id as string);
  }, [isFollow, followMutate, writer?._id, unFollowMutate]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <MyFeedWrap>
      <MyFeedContainer>
        <Header>
          <span>{username}님 스토리</span>
        </Header>
        <MyFeedMain>
          <LeftSide>
            <div className="inner">
              <UserInfo>
                <div className="profile-img">
                  <Avatar
                    imgName=""
                    size={150}
                    imgUrl={
                      writer?.imageSrc
                        ? writer?.imageSrc
                        : gravatar.url(writer?.nickname as string, {
                            s: "130px",
                            d: "retro"
                          })
                    }
                  />
                </div>
                <div className="user-fields">
                  <div>{writer?.nickname}</div>
                  <div>{writer?.email}</div>
                  <div>
                    {currentUser.nickname !== writer?.nickname && (
                      <Button
                        text={`${isFollow ? "팔로우 취소" : "팔로우"}`}
                        type="button"
                        onClick={onFollow}
                        style={{
                          margin: "10px 0",
                          width: 120,
                          height: 45,
                          fontSize: 18,
                          color: "#edf2ff",
                          background: "#637ed3"
                        }}
                      />
                    )}
                  </div>
                </div>
              </UserInfo>
              <UserStatus>
                <ul>
                  <li>
                    <span className="status-inner">
                      <span className="status">팔로잉</span>
                      <span>{followData?.followInfo.followings.length}</span>
                    </span>
                  </li>
                  <li>
                    <span className="status-inner">
                      <span className="status">팔로워</span>
                      <span>{followData?.followInfo.followers.length}</span>
                    </span>
                  </li>
                  <li>
                    <span className="status-inner">
                      <span className="status">게시글</span>
                      <span>{data?.contents.contentsCount}</span>
                    </span>
                  </li>
                </ul>
              </UserStatus>
            </div>
          </LeftSide>
          <MainContents>
            <NavMenu lists={subMenus} borderColor="#868e96" />
            <Outlet />
          </MainContents>
        </MyFeedMain>
      </MyFeedContainer>
    </MyFeedWrap>
  );
};

export default MyFeed;

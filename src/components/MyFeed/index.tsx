import { useMemo } from "react";
import { useParams, Outlet } from "react-router-dom";
import gravatar from "gravatar";
import { useRecoilValue } from "recoil";
import Avatar from "components/Base/Avatar";
import NavMenu from "components/Base/NavMenu";
import Button from "components/Base/Button";
import { ROUTER_PATH } from "constants/router_path";
import { userState } from "store/userState";
import { useUserContentsQuery } from "hooks/services/queries";
import {
  MyFeedContainer,
  MyFeedWrap,
  Header,
  LeftSide,
  MainContents,
  MyFeedMain,
  UserInfo,
  UserStatus,
  ContentsMenu
} from "./styles";

const MyFeed = () => {
  const { STORY } = ROUTER_PATH;
  const { username } = useParams();
  const { data } = useUserContentsQuery(username as string);
  const userInfo = useMemo(() => data?.contents[0]?.writer, [data?.contents]);

  const currentUser = useRecoilValue(userState);

  const subMenus = [
    { id: 1, text: "내 게시글", url: `${STORY}/${username}` },
    { id: 2, text: "관심 글", url: `${STORY}/${username}/empathy` },
    { id: 3, text: "활동 내역", url: `${STORY}/${username}/activity` }
  ];

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
                      userInfo?.imageSrc
                        ? userInfo?.imageSrc
                        : gravatar.url(userInfo?.nickname as string, {
                            s: "130px",
                            d: "retro"
                          })
                    }
                  />
                </div>
                <div className="user-fields">
                  <div>{userInfo?.nickname}</div>
                  <div>{userInfo?.email}</div>
                  <div>
                    {currentUser.nickname !== userInfo?.nickname && (
                      <Button
                        text="팔로우"
                        type="button"
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
                      <span>0</span>
                    </span>
                  </li>
                  <li>
                    <span className="status-inner">
                      <span className="status">팔로워</span>
                      <span>0</span>
                    </span>
                  </li>
                  <li>
                    <span className="status-inner">
                      <span className="status">게시글</span>
                      <span>{data?.contents.length}</span>
                    </span>
                  </li>
                </ul>
              </UserStatus>
            </div>
          </LeftSide>
          <MainContents>
            <ContentsMenu>
              <NavMenu lists={subMenus} />
            </ContentsMenu>
            <Outlet />
          </MainContents>
        </MyFeedMain>
      </MyFeedContainer>
    </MyFeedWrap>
  );
};

export default MyFeed;

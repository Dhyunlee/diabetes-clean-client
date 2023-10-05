import { useState, useEffect, useCallback, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { FiMoreHorizontal } from "react-icons/fi";
import gravatar from "gravatar";
import SubMenu from "components/Base/SubMenu";

import { PostHeaderBlock, Icons } from "components/Posts/styles";
import { userState } from "store/userState";
import { TMyInfo } from "models/data";
import { useDelContentsMutation } from "hooks/service/mutator";
import alertHandler from "utils/functions/alertHandler";
import PostUserInfo from "components/Feed/PostUserInfo";
import useUnFollowMutation from "hooks/service/mutator/follow/useUnFollowMutation";
import useFollowMutation from "hooks/service/mutator/follow/useFollowMutation";

interface IProps {
  writer: TMyInfo;
  contentId: string;
  isDeleted: boolean;
  createdAt: string | Date;
}
const PostHeader = ({ writer, contentId, createdAt, isDeleted }: IProps) => {
  const currentUser = useRecoilValue(userState);
  const [isFollow, setIsFollow] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const followMutate = useFollowMutation();
  const unFollowMutate = useUnFollowMutation();
  const contentsMutation = useDelContentsMutation();

  useEffect(() => {
    if (writer) {
      setIsFollow(currentUser?.followings.includes(writer._id));
    }
  }, [currentUser, writer]);

  const onToggleMenu = useCallback(() => {
    setShowSubMenu((prev) => !prev);
  }, []);

  const onCloseMenu = useCallback(() => {
    setShowSubMenu(false);
  }, []);

  const onDelPost = useCallback(() => {
    if (contentId) {
      console.log({ contentId });
      alertHandler
        .onConfirm({
          msg: "포스팅을 삭제하실건가요?"
        })
        .then((result) => {
          if (result.isConfirmed) {
            contentsMutation.mutate(contentId);
          }
        });
    }
  }, [contentsMutation, contentId]);
  const onFollow = useCallback(() => {
    isFollow
      ? unFollowMutate.mutate(writer?._id as string)
      : followMutate.mutate(writer?._id as string);
  }, [isFollow, writer, followMutate, unFollowMutate]);

  const onReportPost = useCallback(() => {
    console.log("ReportPost");
  }, []);

  const onHidePost = useCallback(() => {
    console.log("HidePost");
  }, []);

  const menuItem = useMemo(() => {
    if (currentUser?._id === writer?._id) {
      return [
        {
          id: 1,
          path: "/mypage",
          label: "게시물 수정"
        },
        {
          id: 2,
          path: null,
          label: "게시물 삭제",
          handler: onDelPost
        },
        {
          id: 3,
          path: null,
          label: "취소",
          handler: onCloseMenu
        }
      ];
    }

    return [
      {
        id: 1,
        path: null,
        label: `${isFollow ? "팔로우 취소" : "팔로우"}`,
        handler: onFollow
      },
      {
        id: 2,
        path: null,
        label: "게시물 숨기기",
        handler: onHidePost
      },
      {
        id: 3,
        path: null,
        label: "게시물 신고",
        handler: onReportPost
      },
      {
        id: 4,
        path: null,
        label: "취소",
        handler: onCloseMenu
      }
    ];
  }, [
    currentUser?._id,
    isFollow,
    onCloseMenu,
    onDelPost,
    onFollow,
    onHidePost,
    onReportPost,
    writer?._id
  ]);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <PostHeaderBlock>
        <PostUserInfo
          createdAt={createdAt}
          userName={writer?.nickname}
          imgUrl={
            writer?.imageSrc
              ? writer?.imageSrc
              : gravatar.url(writer?.nickname, {
                  s: "32px",
                  d: "retro"
                })
          }
          link={`/story/${writer?.nickname}`}
        />
        {!isDeleted && (
          <Icons
            onClick={onToggleMenu}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
          >
            <span>
              <FiMoreHorizontal />
            </span>
          </Icons>
        )}
        {!isDeleted && showSubMenu && (
          <SubMenu
            customCss={{ posX: "125px" }}
            menuItem={menuItem}
            showSubMenu={showSubMenu}
            onCloseMenu={onCloseMenu}
          />
        )}
      </PostHeaderBlock>
    </div>
  );
};

export default PostHeader;

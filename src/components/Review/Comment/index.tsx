import { useCallback, useMemo, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import gravatar from "gravatar";
import { IComment } from "models/db";
import SubMenu from "components/Base/SubMenu";
import ContentsInfo from "components/Base/ContentsInfo";
import { Icons } from "components/Feed/PostCards/styles";
import alertHandler from "utils/functions/alertHandler";
import { userState } from "store/userState";
import { useDelCommentMutation } from "hooks/services/mutations";

import { CommentContainer, CommentContents, CommentHeader } from "./styles";

interface Iprops {
  comment: IComment;
}

const Comment = ({ comment }: Iprops) => {
  const { _id: userId } = useRecoilValue(userState);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const mutation = useDelCommentMutation();
  const { _id, content, createdAt, writer, isDeleted } = comment;

  const onToggleMenu = useCallback(() => {
    setShowSubMenu((prev) => !prev);
  }, []);

  const onCloseMenu = useCallback(() => {
    setShowSubMenu(false);
  }, []);

  const onReportComment = useCallback(() => {
    console.log("ReportPost >> 개발중");
  }, []);

  const onHideComment = useCallback(() => {
    console.log("HidePost >> 개발중");
  }, []);

  const onDelComment = useCallback(() => {
    if (_id) {
      alertHandler
        .onConfirm({
          msg: "댓글을 삭제하실건가요?",
        })
        .then((result) => {
          if (result.isConfirmed) {
            mutation.mutate(_id);
          }
        });
    }
  }, [_id, mutation]);

  const menuItem = useMemo(() => {
    if (userId === writer._id) {
      return [
        {
          id: 1,
          path: "/mypage",
          targetName: "댓글 수정",
        },
        {
          id: 2,
          path: null,
          targetName: "댓글 삭제",
          handler: onDelComment,
        },
      ];
    }
    return [
      {
        id: 1,
        path: null,
        targetName: "신고",
        handler: onHideComment,
      },
    ];
  }, [onDelComment, onHideComment, userId, writer._id]);

  return (
    <CommentContainer>
      <CommentHeader>
        <ContentsInfo
          createdAt={createdAt}
          imgUrl={
            writer?.imageSrc
              ? writer?.imageSrc
              : gravatar.url(writer.nickname, {
                  s: "32px",
                  d: "retro",
                })
          }
          imgSize={40}
          userName={writer.nickname}
          link={"/story/sugarclean119"}
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
            menuItem={menuItem}
            showSubMenu={showSubMenu}
            onCloseMenu={onCloseMenu}
            customCss={{ posX: "125px", posY: "35px" }}
          />
        )}
      </CommentHeader>
      <CommentContents>
        <p>{isDeleted ? "해당 댓글이 삭제되었습니다." : content}</p>
      </CommentContents>
    </CommentContainer>
  );
};

export default Comment;

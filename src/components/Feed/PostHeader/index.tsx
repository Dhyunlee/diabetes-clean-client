import { useState, useCallback, useMemo } from "react";
import { PostHeaderBlock, Icons } from "../PostCards/styles";
import { FiMoreHorizontal } from "react-icons/fi";
import ContentsInfo from "components/Base/ContentsInfo";
import SubMenu from "../../Base/SubMenu";
import { useRecoilValue } from "recoil";
import { userState } from "store/userState";
import { IWriterInfo } from "models/db";

interface IProps {
  writer: IWriterInfo;
}
const PostHeader = ({ writer }: IProps) => {
  const { _id: userId } = useRecoilValue(userState);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const onToggleMenu = useCallback(() => {
    setShowSubMenu((prev) => !prev);
  }, []);

  const onCloseMenu = useCallback(() => {
    setShowSubMenu(false);
  }, []);

  const menuItem = useMemo(
    () => {
      if(userId === writer._id) {
        return [
          {
            id: 1,
            path: "/mypage",
            targetName: "게시물 수정",
          },
          {
            id: 2,
            path: null,
            targetName: "게시물 삭제",
          },
        ] 
      }
      return [
        {
          id: 1,
          path: null,
          targetName: "게시물 숨기기",
        },
        {
          id: 2,
          path: null,
          targetName: "게시물 신고",
        },
      ]
  
    },
    [userId, writer._id]
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <PostHeaderBlock>
        <ContentsInfo
          userName={writer.nickname}
          imgUrl={writer.imageSrc}
          link={`/story/${writer.nickname}`}
        />
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
        {showSubMenu && (
          <SubMenu
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

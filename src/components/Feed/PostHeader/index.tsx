import { useState, useCallback } from "react";
import { PostHeaderBlock, Icons } from "../PostCards/styles";
import { FiMoreHorizontal } from "react-icons/fi";
import ContentsInfo from "components/Base/ContentsInfo";
import SubMenu from "../SubMenu";

interface IProps {
  writer: {
    userName: string;
    imgUrl: string;
  };
}
const PostHeader = ({ writer }: IProps) => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const onToggleMenu = useCallback(() => {
    setShowSubMenu((prev) => !prev);
  }, []);

  const onCloseMenu = useCallback(() => {
    setShowSubMenu(false);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <PostHeaderBlock>
        <ContentsInfo
          userName={writer.userName}
          imgUrl={writer.imgUrl}
          link={`/profile/${writer.userName}`}
        />
        <Icons onClick={onToggleMenu} onMouseDown={e => {e.stopPropagation()}}>
          <span>
            <FiMoreHorizontal />
          </span>
        </Icons>

        {showSubMenu &&(
          <SubMenu menuItem={[
            {
              id: 1,
              path: "/mypage",
              targetName: "게시글 수정",
            },
            {
              id: 2,
              path: null,
              targetName: "게시글 삭제",
            },
          ]} showSubMenu={showSubMenu} onCloseMenu={onCloseMenu}/>
        )}
      </PostHeaderBlock>
    </div>
  );
};

export default PostHeader;

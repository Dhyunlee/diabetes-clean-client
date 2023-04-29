import {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubMenuContainer, SubMenuWrap } from "./styles";

interface Props {
  showSubMenu: boolean;
  setShowSubMenu: React.Dispatch<React.SetStateAction<boolean>>;
  onShowSubMenu?: () => void;
  onCloseMenu: () => void;
}

const SubMenu = ({ showSubMenu, setShowSubMenu, onCloseMenu }: Props) => {
  const navigate = useNavigate();
  const MenuRef = useRef<HTMLDivElement | null>(null);

  const stopPropagation = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    const onClickOutSide = (e: globalThis.MouseEvent) => {
      if (showSubMenu && !MenuRef.current?.contains(e.target as HTMLElement)) {
        setShowSubMenu(false);
      }
    };
    document.addEventListener("mousedown", onClickOutSide);
    return () => {
      document.removeEventListener("mousedown", onClickOutSide);
    };
  }, [setShowSubMenu, showSubMenu]);

  if (!showSubMenu) return null;

  return (
    <SubMenuWrap ref={MenuRef}>
      <SubMenuContainer onMouseDown={stopPropagation}>
        <div className="menu-list" onClick={() => navigate("/mypage")}>
          <Link onClick={onCloseMenu} to={"/mypage"}>
            게시글 수정
          </Link>
        </div>
        <div
          className="menu-list"
          onClick={() => console.log("삭제 기능 중비중...")}
        >
          <button onClick={onCloseMenu}> 게시글 삭제</button>
        </div>
      </SubMenuContainer>
    </SubMenuWrap>
  );
};

export default SubMenu;

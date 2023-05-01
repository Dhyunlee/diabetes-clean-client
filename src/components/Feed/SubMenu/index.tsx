import { Link, useNavigate } from "react-router-dom";
import Menu from "../Base/Menu";

interface Props {
  showSubMenu: boolean;
  onCloseMenu: () => void;
}

const SubMenu = ({showSubMenu, onCloseMenu}:Props) => {
  const navigate = useNavigate();

  return (
    <Menu showSubMenu={showSubMenu} onCloseMenu={onCloseMenu}>
      <div className="menu-list" onClick={() => navigate("/mypage")}>
        <Link onClick={onCloseMenu} to={"/mypage"}>
          게시글 수정
        </Link>
      </div>
      <div
        className="menu-list"
        onClick={() => console.log("삭제 기능 중비중...")}
      >
        <button onClick={() => {
          console.log('닫히는 지는 테스트위해 잠시 ')
        }}> 게시글 삭제</button>
      </div>
    </Menu>
  );
};

export default SubMenu;

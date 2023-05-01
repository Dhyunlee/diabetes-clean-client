import { Link, useNavigate } from "react-router-dom";
import Menu from "../Base/Menu";

interface MenuItemType {
  id: number;
  path: string | null;
  targetName: string;
}

interface Props {
  showSubMenu: boolean;
  onCloseMenu: () => void;
  menuItem: MenuItemType[];
}

const SubMenu = ({ menuItem, showSubMenu, onCloseMenu }: Props) => {
  const navigate = useNavigate();

  return (
    <Menu showSubMenu={showSubMenu} onCloseMenu={onCloseMenu}>
      {menuItem.map((menu) =>
        menu.path ? (
          <div className="menu-list" onClick={() => navigate(`${menu.path}`)}>
            <Link onClick={onCloseMenu} to={menu.path}>
              {menu.targetName}
            </Link>
          </div>
        ) : (
          <div
            className="menu-list"
            onClick={() => console.log("삭제 기능 중비중...")}
          >
            <button
              onClick={() => {
                console.log("닫히는 지는 테스트위해 잠시 ");
              }}
            >
              {menu.targetName}
            </button>
          </div>
        )
      )}
    </Menu>
  );
};

export default SubMenu;

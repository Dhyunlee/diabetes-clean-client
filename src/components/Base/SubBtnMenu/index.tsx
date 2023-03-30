import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Li } from "components/TopBar/UserSubMenu/styles";
import { SubMenu, SubMenuBtn, SubMenuBtnContainer } from "./styles";

interface MenuItemType {
  id: number,
  path: string;
  targetName: string;
};
interface IProps {
  menuItems: MenuItemType[]
}

const SubButtonMenu = ({ menuItems }: IProps) => {
  const navigate = useNavigate()
  const [changePos, setChangePost] = useState(false);
  const [showUserSubMenu, setShowUserSubMenu] = useState(false);
  const handleCloseMenu = useCallback(() => {
    setShowUserSubMenu(false);
  }, []);

  return (
    <SubMenuBtnContainer>
      <SubMenuBtn
        onClick={() => {
          setChangePost((prev) => !prev);
          setShowUserSubMenu((prev) => !prev);
        }}
        open={changePos}
      >
        <MdAdd />
      </SubMenuBtn>
      {showUserSubMenu && (
        <SubMenu>
          {menuItems.map((menu) => (
            <Li key={menu.id}>
              <Link onClick={handleCloseMenu} to={menu.path}>
                {menu.targetName}
              </Link>
            </Li>
          ))}
        </SubMenu>
      )}
    </SubMenuBtnContainer>
  );
};

export default SubButtonMenu;

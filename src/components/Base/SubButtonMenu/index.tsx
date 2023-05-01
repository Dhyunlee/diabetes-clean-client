import { useState, useCallback, useRef } from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { Li } from "components/TopBar/UserSubMenu/styles";
import { SubBtnMenu, SubMenuBtn, SubMenuBtnContainer } from "./styles";

interface MenuItemType {
  id: number;
  path: string;
  targetName: string;
}
interface IProps {
  menuItems: MenuItemType[];
}

const SubButtonMenu = ({ menuItems }: IProps) => {
  const [changePos, setChangePos] = useState(false);
  const [showUserSubMenu, setShowUserSubMenu] = useState(false);
  const MenuRef = useRef<HTMLDivElement | null>(null);
  const handleCloseMenu = useCallback(() => {
    setShowUserSubMenu(false);
  }, []);
  
  return (
    <SubMenuBtnContainer ref={MenuRef}>
      <SubMenuBtn
        onClick={() => {
          setChangePos((prev) => !prev);
          setShowUserSubMenu((prev) => !prev);
        }}
        open={changePos}
      >
        <MdAdd />
      </SubMenuBtn>
      {showUserSubMenu && (
        <SubBtnMenu open={changePos}>
          {menuItems.map((menu) => (
            <Li key={menu.id}>
              <Link onClick={handleCloseMenu} to={menu.path}>
                {menu.targetName}
              </Link>
            </Li>
          ))}
        </SubBtnMenu>
      )}
    </SubMenuBtnContainer>
  );
};

export default SubButtonMenu;

import { useState, useCallback, useRef } from "react";
import { MdAdd } from "react-icons/md";
import { SubMenuBtn, SubMenuBtnContainer } from "./styles";
import SideMenu from "./SideMenu";
interface MenuItemType {
  id: number;
  path: string | null;
  label: string;
  handler?: any;
}

interface IProps {
  menuItem: MenuItemType[];
}

const SideBtnMenu = ({ menuItem }: IProps) => {
  const [showUserSubMenu, setShowUserSubMenu] = useState(false);
  const MenuRef = useRef<HTMLDivElement | null>(null);

  const onShowSubMenu = useCallback(() => {
    setShowUserSubMenu(!showUserSubMenu);
  }, [showUserSubMenu]);

  const onCloseMenu = useCallback(() => {
    setShowUserSubMenu(false);
  }, []);

  return (
    <SubMenuBtnContainer ref={MenuRef}>
      <SubMenuBtn
        onClick={onShowSubMenu}
        onMouseDown={(e) => e.stopPropagation()}
        open={showUserSubMenu}
      >
        <MdAdd />
      </SubMenuBtn>

      <SideMenu
        menuItem={menuItem}
        showUserSubMenu={showUserSubMenu}
        onCloseMenu={onCloseMenu}
      />
    </SubMenuBtnContainer>
  );
};

export default SideBtnMenu;

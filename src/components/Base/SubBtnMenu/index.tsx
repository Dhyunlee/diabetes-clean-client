import { useState, useCallback, useRef, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { Li } from "components/TopBar/UserSubMenu/styles";
import { SubMenu, SubMenuBtn, SubMenuBtnContainer } from "./styles";

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

  useEffect(() => {
    const onClickOutSide = (e: globalThis.MouseEvent) => {
      if (
        showUserSubMenu &&
        !MenuRef.current?.contains(e.target as HTMLElement)
      ) {
        console.log("mousedown 바깥쪽 클릭");
        setShowUserSubMenu(false);
        setChangePos(false);
      }
    };
    document.addEventListener("mousedown", onClickOutSide);
    return () => {
      document.removeEventListener("mousedown", onClickOutSide);
    };
  }, [showUserSubMenu]);

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
        <SubMenu open={changePos}>
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

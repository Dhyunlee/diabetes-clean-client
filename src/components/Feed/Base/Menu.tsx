import React, { useEffect, useRef } from "react";
import { SubMenuContainer, SubMenuWrap } from "../SubMenu/styles";

interface Props {
  children: React.ReactNode;
  showSubMenu: boolean;
  onCloseMenu: () => void;
}

const Menu = ({ children, showSubMenu, onCloseMenu }: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutSide = (e: globalThis.MouseEvent) => {
      console.log(e.target)
      if (showSubMenu && !menuRef.current?.contains(e.target as HTMLElement)) {
        onCloseMenu();
      }
    };
    document.addEventListener("mousedown", onClickOutSide);
    return () => {
      document.removeEventListener("mousedown", onClickOutSide);
    };
  }, [onCloseMenu, showSubMenu]);

  if (!showSubMenu) return null;

  return (
    <>
      <SubMenuWrap ref={menuRef}>
        <SubMenuContainer>{children}</SubMenuContainer>
      </SubMenuWrap>
    </>
  );
};

export default Menu;

import React, { useEffect, useRef } from "react";
import { SubMenuContainer, SubMenuWrap } from "../SubMenu/styles";

interface Props {
  children: React.ReactNode;
  showSubMenu: boolean;
  onCloseMenu: () => void;
}

const Menu = ({ children, showSubMenu, onCloseMenu }: Props) => {
  const MenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutSide = (e: globalThis.MouseEvent) => {
      console.log(e.target)
      if (showSubMenu && !MenuRef.current?.contains(e.target as HTMLElement)) {
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
      <SubMenuWrap ref={MenuRef}>
        <SubMenuContainer onMouseDown={e => e.preventDefault()}>{children}</SubMenuContainer>
      </SubMenuWrap>
    </>
  );
};

export default Menu;

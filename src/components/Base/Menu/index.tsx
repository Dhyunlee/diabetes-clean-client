import React, { FC, useEffect, useRef } from "react";
import { SubMenuContainer, SubMenuWrap } from "./styles";

export interface CustomCss {
  posX?: number, 
  posY?: number,
}

interface Props {
  children: React.ReactNode;
  customCss?: CustomCss;
  showMenu: boolean;
  onCloseMenu: () => void;
}

const Menu: FC<Props> = ({ children, showMenu, onCloseMenu, customCss }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutSide = (e: globalThis.MouseEvent) => {
      console.log(e.target);
      if (showMenu && !menuRef.current?.contains(e.target as HTMLElement)) {
        onCloseMenu();
      }
    };
    document.addEventListener("mousedown", onClickOutSide);
    return () => {
      document.removeEventListener("mousedown", onClickOutSide);
    };
  }, [onCloseMenu, showMenu]);

  if (!showMenu) return null;

  return (
    <>
      <SubMenuWrap posX={customCss?.posX} posY={customCss?.posY} ref={menuRef}>
        <SubMenuContainer>{children}</SubMenuContainer>
      </SubMenuWrap>
    </>
  );
};

export default React.memo(Menu);

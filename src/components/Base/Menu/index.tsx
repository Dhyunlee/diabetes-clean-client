import React, { FC, MouseEvent, ReactNode, useCallback } from 'react';
import { MenuWrap, MenuContainer } from './styles';

interface Props {
  children: ReactNode;
  showMenu: boolean;
  onCloseModal: () => void;
  onClick?: () => void;
}

const Menu: FC<Props> = ({ showMenu, children, onCloseModal }) => {
  const stopPropagation = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  if (!showMenu) return null;

  return (
    <MenuWrap onClick={onCloseModal}>
      <MenuContainer onClick={stopPropagation}>{children}</MenuContainer>
    </MenuWrap>
  );
};

export default React.memo(Menu);

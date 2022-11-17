import React, { FC, ReactNode } from 'react';
import { ItemStyle } from './styles';

interface Props {
  children: ReactNode;
}
const MenuItem: FC<Props> = ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>;
};

export default React.memo(MenuItem);

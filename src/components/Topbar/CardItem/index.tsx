import { FC, ReactNode } from 'react';
import { ItemStyle } from './styles';

interface Props {
  children: ReactNode;
}
const CardItem: FC<Props> = ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>;
};

export default CardItem;

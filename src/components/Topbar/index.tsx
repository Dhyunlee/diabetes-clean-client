import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {
  LogoContainer,
  MenuContainer,
  NavBarContainer,
  SidebarIcon,
} from './styles';
import UserMenu from './UserMenu';
interface Props {
  handleShowSideMenu: () => void;
}

const Topbar = ({ handleShowSideMenu }: Props) => {
  return (
    <>
      <NavBarContainer>
        <LogoContainer>
          <SidebarIcon onClick={handleShowSideMenu}>
            <FaBars />
          </SidebarIcon>
          <h1>
            <Link to="/">당클린</Link>
          </h1>
        </LogoContainer>
        <MenuContainer>
          <UserMenu />
        </MenuContainer>
      </NavBarContainer>
    </>
  );
};

Topbar.defaultProps = {
  isShowMenu: false,
};
export default Topbar;

import MenuItem from "components/Topbar/MenuItem/MenuItem";
import { CloseBtn, NavbarToggle, StyledNavMenu } from "./styles";

interface IProps {
  isOpen: boolean;
  showCloseSidebar: () => void;
}

const Sidebar = ({ isOpen, showCloseSidebar }: IProps) => {
  return (
    <StyledNavMenu className={isOpen ? "nav-menu active" : "nav-menu"}>
      <ul className="nav-menu-items" onClick={showCloseSidebar}>
        <NavbarToggle className="navbar-toggle">
          <CloseBtn onClick={showCloseSidebar}>
            <span>&times;</span>
          </CloseBtn>
        </NavbarToggle>
        <MenuItem />
      </ul>
    </StyledNavMenu>
  );
};

export default Sidebar;

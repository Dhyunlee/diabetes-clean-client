import LinkMenuItem from "components/TopBar/LinkMenuItem";
import { CloseBtn, NavbarToggle, StyledNavMenu } from "./styles";
import { menuItemData } from "utils/menuItemData";

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
        <LinkMenuItem menuItemData={menuItemData}/>
      </ul>
    </StyledNavMenu>
  );
};

export default Sidebar;

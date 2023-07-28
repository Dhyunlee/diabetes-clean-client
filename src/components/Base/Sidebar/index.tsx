import { useMemo } from "react";
import LinkMenuItem from "components/TopBar/LinkMenuItem";
import { CloseBtn, NavbarToggle, StyledNavMenu } from "./styles";
import { ROUTER_PATH } from "constants/router_path";

interface IProps {
  isOpen: boolean;
  showCloseSidebar: () => void;
}

const Sidebar = ({ isOpen, showCloseSidebar }: IProps) => {
  const { MEMO_DIABETES, STORY, MYPAGE } = ROUTER_PATH;
  const userMenuItem = useMemo(
    () => [
      {
        id: 1,
        label: "기록",
        path: `${MEMO_DIABETES}`
      },
      {
        id: 2,
        label: "스토리",
        path: `${STORY}`
      },
      {
        id: 3,
        label: "마이페이지",
        path: `${MYPAGE}`
      }
    ],
    [MEMO_DIABETES, MYPAGE, STORY]
  );

  return (
    <StyledNavMenu className={isOpen ? "nav-menu active" : "nav-menu"}>
      <ul className="nav-menu-items" onClick={showCloseSidebar}>
        <NavbarToggle className="navbar-toggle">
          <CloseBtn onClick={showCloseSidebar}>
            <span>&times;</span>
          </CloseBtn>
        </NavbarToggle>
        <LinkMenuItem menuItemData={userMenuItem} />
      </ul>
    </StyledNavMenu>
  );
};

export default Sidebar;

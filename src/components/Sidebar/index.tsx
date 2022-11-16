import { CloseBtn } from "components/Modal/styles";
import { Link } from "react-router-dom";
import { SideBar, SideMenu } from "./styles";

interface Props {
  isOpen: boolean;
  handleShowSideMenu: () => void;
  handleCloseMenu: () => void;
}

const Asidebar = ({ isOpen, handleCloseMenu }: Props) => {

  const onCloseMenu = () => {
    handleCloseMenu();
  };

  return (
    <SideBar isOpen={isOpen}>
      <CloseBtn onClick={onCloseMenu}>
        <span>&times;</span>
      </CloseBtn>
      <SideMenu>
        <ul>
          <li>
            <Link to="/memo" onClick={onCloseMenu}>
              기록
            </Link>
          </li>
          <li>
            <Link to="/story" onClick={onCloseMenu}>
              스토리
            </Link>
          </li>
          <li>
            <Link to="/mypage" onClick={onCloseMenu}>
              마이페이지
            </Link>
          </li>
        </ul>
      </SideMenu>
    </SideBar>
  );
};

export default Asidebar;

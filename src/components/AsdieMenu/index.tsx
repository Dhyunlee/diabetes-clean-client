import { CloseBtn } from 'components/Modal/styles';
import { Link } from 'react-router-dom';
import { SideBar, SideMenu } from './styles';

interface Props {
  handleCloseMenu: (e: any) => void;
}

const AsdieMenu = ({ handleCloseMenu }: Props) => {
  return (
    <SideBar>
      <CloseBtn onClick={handleCloseMenu}>
        <span>&times;</span>
      </CloseBtn>
      <SideMenu>
        <ul>
          <li>
            <Link to="/memo" onClick={handleCloseMenu}>
              기록
            </Link>
          </li>
          <li>
            <Link to="/story" onClick={handleCloseMenu}>
              스토리
            </Link>
          </li>
          <li>
            <Link to="/mypage" onClick={handleCloseMenu}>
              마이페이지
            </Link>
          </li>
        </ul>
      </SideMenu>
    </SideBar>
  );
};

export default AsdieMenu;

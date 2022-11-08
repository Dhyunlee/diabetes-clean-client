import { useState, useCallback, FC, ReactNode } from 'react';
import Topbar from 'components/Topbar';
import { Header, MainContainer, OverWrap, Section } from './styles';
import AsdieMenu from 'components/AsdieMenu';

interface Props {
  children: ReactNode;
  className: string;
}

const MainLayout: FC<Props> = ({ children }) => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleShowSideMenu = useCallback(() => {
    console.log('click')
    setShowSideMenu(prev => !prev);
  }, []);
  
  const handleCloseMenu = useCallback(() => {
    console.log('close_menu')
    setShowSideMenu(false);
  }, []);

  return (
    <>
      <Header>
        <Topbar
          handleShowSideMenu={handleShowSideMenu}
        />
      </Header>
      <Section>
        <MainContainer>{children}</MainContainer>
      </Section>

      {/* side 메뉴 */}
      {showSideMenu && (
        <>
          <OverWrap onClick={handleShowSideMenu}></OverWrap>
          <AsdieMenu handleCloseMenu={handleCloseMenu} />
        </>
      )}
    </>
  );
};

export default MainLayout;

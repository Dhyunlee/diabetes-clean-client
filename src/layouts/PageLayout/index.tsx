import { useState, useCallback, FC, ReactNode, useEffect } from "react";
import Topbar from "components/Topbar";
import { Header, MainContainer, OverWrap, Section } from "./styles";
import Sidebar from "components/Sidebar";

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowSideMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => console.log({ isOpen }), [isOpen]);
  return (
    <>
      <Header>
        <Topbar handleShowSideMenu={handleShowSideMenu} />
      </Header>
      <Section>
        <MainContainer>{children}</MainContainer>
      </Section>

      {/* side 메뉴 */}
      {isOpen && <OverWrap onClick={handleCloseMenu}></OverWrap>}
      <Sidebar
        isOpen={isOpen}
        handleShowSideMenu={handleShowSideMenu}
        handleCloseMenu={handleCloseMenu}
      />
    </>
  );
};

export default PageLayout;

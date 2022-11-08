import styled from '@emotion/styled';

export const NavBarContainer = styled.nav`
  width: 100%;
  padding: 0.5rem 3.5rem 0.5rem 2.5rem;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #dadada;
  align-items: center;
`;

export const LogoContainer = styled.div`
  flex: 1;
  position: relative;
  color: #70290d;

  h1 {
    width: 140px;
    padding: 0.3rem 0.7rem;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    font-family: sans-serif;
  }
`;

export const SidebarIcon = styled.div`
  position: absolute;
  top: 11px;
  left: 13px;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  flex: 7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

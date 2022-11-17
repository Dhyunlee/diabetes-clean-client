import styled from "@emotion/styled";

export const Navbar = styled.div`
  padding: 0 30px;
  border-bottom: 1px solid #dfdfdf;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-right {
    display: flex;
    justify-content: center;
    padding: 5px 12px;
  }
  .menu-bars {
    display: inline-block;
    padding: 5px 12px;
    font-size: 25px;
    background: none;
    border: none;
    outline: none;
    color: #70290d;
    cursor: pointer;
  }
  .page-title {
    position: relative;
    top: -5px;
    margin-left: 5px;
    height: 100%;
    font-size: 20px;
    line-height: 40px;
    color: #70290d;
    font-weight: 600;
  }
`;
export const OverWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const StyledNavMenu = styled.nav`
  background-color: #eee;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 98;
  transition: 850ms;

  &.active {
    left: 0;
    transition: 350ms;
  }

  & .nav-menu-items {
    width: 100%;
  }
`;

export const NavContents = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;

  & > a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;

    &:hover {
      color: #70290d;
      font-weight: 700;
      background-color: #e3d8d3;
    }

    span {
      margin-left: 16px;
    }
  }
`;

export const NavbarToggle = styled.li`
  background-color: #eee;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  left: 0;
  top: 0;
`;

export const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 10%);
  border-radius: 5px;
  position: absolute;
  top: 3px;
  right: 6px;
  cursor: pointer;

  &:active {
    margin-top: -2px;
  }

  span {
    width: 100%;
    height: 100%;
    display: inline-block;
    padding: 0 5px;
    font-size: 20px;
    color: #2d2d2d;
  }
`;

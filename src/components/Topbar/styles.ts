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

import styled from '@emotion/styled';

export const Header = styled.header`
  box-shadow: 0px 2px 12px -3px rgb(0 0 0 / 52%);
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
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

export const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  margin: 3px;
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
    display: inline-block;
    line-height: 15px;
    padding: 0 5px;
    font-size: 20px;
    color: #2d2d2d;
  }
`;

export const AsideBar = styled.div`
  width: 240px;
  /* height: calc(100vh - 55px); */
  position: fixed;
  background: #eee;
  box-shadow: 0px 2px 12px -3px rgb(0 0 0 / 52%);
  top: 0;
  bottom: 0;
  z-index: 2;
`;

export const AsideMenu = styled.div`
  padding-top: 45px;

  ul {
    width: 241px;
  }
  li {
    padding: 10px;
    text-align: center;
    width: 100%;
    border: none;
    box-shadow: 0px 2px 5px -3px rgb(0 0 0 / 52%);
    margin: 15px 0;
    cursor: pointer;
  }

  li:hover {
    color: #70290d;
    font-weight: bold;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  padding: 1.3rem 2.5rem;
`;

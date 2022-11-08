import styled from '@emotion/styled';

export const SideBar = styled.div`
  width: 240px;
  // height: calc(100vh - 55px);
  position: fixed;
  background: #eee;
  box-shadow: 0px 2px 12px -3px rgb(0 0 0 / 52%);
  top: 0;
  bottom: 0;
  z-index: 2;
  /*   
    리액트에 애니메이션 달기 공부한 후 적용
    일단은 정적으로 

    ${(props: { isShowModal?: boolean }) => {
    return props.isShowModal ? 'left: -240px' : 'left: 0';
  }} */
`;

export const SideMenu = styled.div`
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
  }

  li:hover {
    color: #70290d;
    font-weight: bold;
  }
`;

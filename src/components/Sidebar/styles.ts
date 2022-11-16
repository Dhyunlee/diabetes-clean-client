import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TSideBar = {
  isOpen: boolean
}
export const SideBar = styled.div<TSideBar>`
  width: 240px;
  position: fixed;
  display: block;
  background: #eee;
  transform: ${props => props.isOpen ? 'translateX(0px)' : 'translateX(-300px)'};
  transition: all .3s ease-in;
  box-shadow: 0px 2px 12px -3px rgb(0 0 0 / 52%);
  top: 0;
  bottom: 0;
  z-index: 2;
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

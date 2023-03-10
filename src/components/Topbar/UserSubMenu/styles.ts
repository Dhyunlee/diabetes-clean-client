import styled from "@emotion/styled";

export const MenuContainer = styled.ul`
  padding: 5px 10px;
  text-align: center;
  position: fixed;
  top: 70px;
  right: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 23px -5px rgb(0 0 0 / 25%);
`;

export const Li = styled.li`
  font-size: 15px;
  padding: 0.2em 1.2em;
  position: relative;
  top: 0;
  left: 0;

  button {
    font-size: inherit;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
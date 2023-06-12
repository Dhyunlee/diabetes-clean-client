import styled from "@emotion/styled";

export const DateSelectWrap = styled.nav`
  width: 100%;
  padding:  0 0;
  margin: 30px 0;
  ul {
    padding: 10px 15px;
    background-color: #e9ecef;
    display: flex;
    border-radius: 5px;
    gap: 15px;
  }

  li {
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &.selected {
      box-shadow: 0 2px 3px 1px rgb(0 0 0 / 10%);
      background-color: #fff;

    }
  }

`;
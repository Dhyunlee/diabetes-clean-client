import styled from "@emotion/styled";

export const SearchForm = styled.form`
  width: 100%;

  .search-inner {
    display: flex;
    align-content: center;
    box-shadow: 0px 0px 6px 3px rgb(0 0 0 /10%);
  }
  .input-wrap {
    flex: 10;
    width: 100%;
    height: 40px;
    border-radius: 4px;

    & input {
      padding: 0 5px;
      border: none;
      width: inherit;
      height: 100%;
      outline: none;
      font-size: 16px;
    }
  }
  .search-icon {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f3f5;
    cursor: pointer;
    &:active {
    }
    &:hover {
      background-color: #e9ecef;
    }
  }
`;

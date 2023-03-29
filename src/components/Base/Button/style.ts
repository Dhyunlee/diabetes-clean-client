import styled from "@emotion/styled";

export const ButtonInterface = styled.button`
  width: 80px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #ced4da;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
  &:active {
    transform: translateY(3px);
  }

  & + & {
    margin-left: 10px;
  }
`;

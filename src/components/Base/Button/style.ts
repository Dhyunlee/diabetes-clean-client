import styled from "@emotion/styled";
import { palette } from "libs/palette";

export const ButtonInterface = styled.button`
  width: 80px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #ced4da;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[0]};
  }
  &:active {
    transform: translateY(3px);
  }

  & + & {
    margin-left: 10px;
  }
`;

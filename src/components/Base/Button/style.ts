import styled from "@emotion/styled";

export const ButtonInterface = styled.button<{
  posX?: string | number;
  posY?: string | number;
  size?: string | number;
}>`
  width: ${(props) =>
    (typeof props.posX === "number" ? props.posX + "px" : props.posX) ||
    "86px"};
  height: ${(props) =>
    (typeof props.posY === "number" ? props.posY + "px" : props.posY) ||
    "35px"};
  font-size: ${(props) =>
    (typeof props.size === "number" ? props.size + "px" : props.size) ||
    "16px"};
  background-color: transparent;
  border: 1px solid #ced4da;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: translateY(3px);
  }

  & + & {
    margin-left: 10px;
  }
`;

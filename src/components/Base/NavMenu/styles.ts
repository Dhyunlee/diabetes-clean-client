import styled from "@emotion/styled";

export const NavMenutWrap = styled.nav<{
  bgColor?: string;
  borderColor?: string;
  fontSize?: string | number;
}>`
  width: 100%;
  padding: 0 0;
  margin: 30px 0;
  background-color: ${({ bgColor }) => bgColor || "inherit"};

  ul {
    position: relative;
    padding: 10px 15px;
    display: flex;
    border-radius: 5px;
    gap: 15px;
  }

  li {
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &.active {
      position: absolute;
      display: inline-flex;
      height: 3px;
      border-radius: 2px;
      bottom: 0;
      transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1.05);
      z-index: 2;
      background-color: ${({ borderColor }) => borderColor || "#adb5bd"};
    }
    & > a,
    & > span {
      display: block;
      padding: 5px 10px;
      font-size: ${({ fontSize }) =>
        (typeof fontSize === "number" ? fontSize + "px" : fontSize) || "16px"};
    }
  }
`;

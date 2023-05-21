import styled from "@emotion/styled";
import { palette } from "libs/palette";

export const ContentsInfoInterface = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  border-radius: 5px;

  .left-img {
    flex: 1;
    display: flex;
  }

  .right-info {
    flex: 10;
    display: flex;
    flex-direction: column;
    font-weight: 200;
    font-size: 15px;
    .user_name {
      span {
        display: inline-block;
        padding: 3px;
        cursor: pointer;
      }
      &:hover {
        color: ${palette.gray[3]}// #868e96;
      }
    }
  }
`;
import styled from "@emotion/styled";
import { palette } from "libs/palette";

export const PostStatusContainer = styled.div`
  .status_inner {
    display: flex;
    align-items: center;
    padding: 10px 0;
    gap: 26px;
  }

  .status_item {
    &:hover {
      color: ${palette.gray[3]};
    }
  }

  .status_item.links {
    position: relative;
    top: -2px;

    .likes-icon {
      font-size: 20px;
      position: relative;
      top: 3px;
      left: 2px;
      padding-right: 5px;
      cursor: pointer;
    }
    .count {
      padding-left: 3px;
      position: absolute;
      right: -8px;
    }
  }

  .status_item.comments {
    position: relative;
    .count {
      padding-left: 3px;
      position: absolute;
      top: -4px;
      right: -13px;
    }
  }
`;

import { palette } from 'libs/palette';
import styled from "@emotion/styled";

export const ReviewContainer = styled.div`
  .review-status {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  .review_item {
    &:hover {
      color: ${palette.gray[3]};
    }
  }

  .review_item.links {
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

  .review_item.comments {
    position: relative;
    .count {
      padding-left: 3px;
      position: absolute;
      top: -4px;
      right: -13px;
    }
  }
`;

export const CommentsContainer = styled.div`
  padding-top: 35px;
`;

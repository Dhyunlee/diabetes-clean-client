import { palette } from 'libs/palette';
import styled from "@emotion/styled";

export const ReviewContainer = styled.div`
  .review-status {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  .review_item {
    cursor: pointer;
    &:hover {
      color: ${palette.gray[3]};
    }
  }

  .review_item.links {
    position: relative;

    .likes-icon {
      font-size: 20px;
      position: relative;
      top: 5px;
      left: 2px;
      padding-right: 5px;
    }
    .count {
      padding-left: 3px;
      position: absolute;
      top: -2px;
      right: -8px;
    }
  }

  .review_item.comments {
    position: relative;
    .count {
      padding-left: 3px;
      position: absolute;
      top: -4px;
      right: -12px;
    }
  }
`;

export const CommentsContainer = styled.div`
  padding-top: 35px;
`;

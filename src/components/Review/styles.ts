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
      color: #868e96;
    }
  }

  .review_item.links {
    position: relative;

    .likes-icon {
      font-size: 20px;
      position: relative;
      left: 2px;
      top: 3px;
      padding-right: 5px;
    }
    .count {
      padding-left: 3px;
      position: absolute;
      top: 0;
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

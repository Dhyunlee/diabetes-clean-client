import styled from "@emotion/styled";

export const PostCardContainer = styled.div`
  width: 100%;
  height: calc(100vh - 132px);
  padding: 0 1.2rem;
  border-radius: 5px;
  color: #343a40;
  overflow: auto;
`;

export const PostCardWrap = styled.div`
  &:nth-of-type(2) {
    margin: 20px 0;
  }
  padding: 20px 15px;
  background-color: #fff;
  border-radius: 5px;
`;

// post-header
export const PostHeader = styled.header`
  width: 35%;
`;

export const PostHeaderBlock = styled.div`
  width: 100%;
  display: flex;
  border-radius: 5px;

  .img {
    flex: 1;
  }
  .info {
    flex: 3;
    display: flex;
    flex-direction: column;
    font-weight: 200;
    font-size: 15px;
    .user_name {
      cursor: pointer;

      &:hover {
        color: #868e96;
      }
    }
  }
`;

// post-contents
export const PostContents = styled.section`
  padding-top: 10px;
`;

export const PostContentsBlock = styled.div``;

export const ReviewBlock = styled.div`
  padding-top: 8px;
`;

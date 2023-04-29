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
  position: relative;
  width: 100%;
`;

export const PostHeaderBlock = styled.div`
  width: 35%;
  display: flex;
  border-radius: 5px;
`;

export const Icons = styled.div`
  position: absolute;
  right: 12px;
  cursor: pointer;

  & span {
    width: 35px;
    height: 35px;
    font-size: 20px;
    border-radius: 50%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      opacity: 0.3;
    }
    &:hover {
      background-color: #f1f3f5;
    }
  }

  .submenu {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

// post-contents
export const PostBody = styled.section`
  position: relative;
  padding-top: 10px;
`;

export const PostBodyBlock = styled.div`
  padding: 0 5px;
`;

export const ReviewBlock = styled.div`
  padding-top: 25px;
`;

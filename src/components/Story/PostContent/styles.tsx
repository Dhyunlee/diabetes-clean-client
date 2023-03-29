import styled from "@emotion/styled";

export const PostContentInterface = styled.div`
  .img-wrap {
    padding-top: 8px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .content-wrap {
    padding: 30px 0px;
    p {
      width: 100%;
      font-size: 16px;
      font-weight: 300;
    }
  }
`;

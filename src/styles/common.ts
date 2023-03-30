import styled from "@emotion/styled";

export const Header = styled.header`
  box-shadow: ${({theme}) => theme.boxShadow.light};
`;

export const Main = styled.main`
  width: 100%;
  padding: 1.3rem 2.5rem;
`;

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 10px;
`;

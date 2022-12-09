import styled from "styled-components";

export const HomeContainer = styled.div`
  > h1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .load {
    width: 100%;
    height: 100vh;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 2rem;
`;

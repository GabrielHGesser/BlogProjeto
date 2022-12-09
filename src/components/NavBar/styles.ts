import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  background-color: #0D0D0D;

  .TitlePage > a {
    opacity: 1;
    color: #F2F2F2;
  }
`;

export const UlContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .new-btn {
    width: 100px;
    height: 30px;
    border: 2px solid #4EA8DE;
    line-height: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem ;
    border-radius: 8px;
  
    color: #d9d9d9;

    transition: 0.5s;

    &:hover {
      border: 2px solid transparent;
      background: #1E6F9F;
    }
  }
`;

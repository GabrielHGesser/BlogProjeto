import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid #808080; */
  background: #262626;
  border-radius: 8px;
  padding: 2rem;

  > h2 {
    width: 320px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: .5rem;
    color: #f2f2f2;
    font-weight: 600;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  > p{
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1rem;
    color: #d9d9d9;
    font-weight: 400;
  }


  .btn {
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

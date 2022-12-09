import styled from "styled-components";

export const NewPostContainer = styled.div`
  text-align: center;

  > h1 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  > label {
    font-size: 1.2rem;
    font-weight: 400;
  }

  > input {
    width: 500px;
    height: 40px;
    padding: 1rem 1rem;

    outline: none;

    border: 0;
    border-radius: 8px;
    background: #262626;
    color: #f2f2f2;
    font-size: 1rem;
    font-weight: 400;

    &:focus {
      border: 2px solid #4ea8de;
    }

    &::placeholder {
      color: #808080;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  > label {
    font-size: 1.2rem;
    font-weight: 400;
  }

  > textarea {
    width: 500px;
    height: 150px;
    padding: 1rem 1rem;
    resize: none;

    outline: none;

    border: 0;
    border-radius: 8px;
    background: #262626;
    color: #f2f2f2;
    font-size: 1rem;
    font-weight: 400;

    &:focus {
      border: 2px solid #4ea8de;
    }

    &::placeholder {
      color: #808080;
    }
  }
`;

export const Button = styled.button`
  width: 500px;
  height: 40px;
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid #4ea8de;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #f2f2f2;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;

  transition: 0.5s;

  &:hover {
    border: 2px solid transparent;
    background: #1e6f9f;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

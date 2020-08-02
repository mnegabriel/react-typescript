import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #ccc;
  margin-top: 80px;
  max-width: 460px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 15px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    border: none;
    border-radius: 5px 0 0 5px;
    height: 60px;
    padding: 0 18px;
    color: #737373;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 60px;
    border-radius: 0 5px 5px 0;
    background-color: #00c853;
    border: none;
    color: white;
    font-weight: bolder;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

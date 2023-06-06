import { styled } from "styled-components";

export const Form = styled.form`
  input {
    width: clamp(200px, 30vw, 400px);
    background: var(--color-blue-900);
    border: none;
    border-radius: 8px 0px 0px 8px;
    padding: 8px 16px;

    color: var(--color-gray-100);
    
    ::placeholder {
      color: var(--color-gray-400);
    }
  }

  button {
    background: var(--color-gray-100);
    border-radius: 0px 4px 4px 0px;
    border: none;

    padding: 8px 16px;
  }
`;
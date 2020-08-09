import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Input = styled.input`
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.02);
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 0.5rem;
  border: 1px solid black;
  margin-bottom: 15px;
  width: 100%;
  transition: border-color 0.3s ease-in-out;
  &:focus {
    outline: 0;
    border-color: ${(props) => props.theme.red};
  }
`;

export default Input;
